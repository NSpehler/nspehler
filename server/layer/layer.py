import os
import shutil
import zipfile
import subprocess

import boto3
import colorama


def run_command(command):
    result = subprocess.run(command.split(), stdout=subprocess.PIPE)
    result = result.stdout.decode("utf-8")

    return result


def zip_folder():
    zf = zipfile.ZipFile("layer.zip", "w", zipfile.ZIP_DEFLATED)
    for directory_name, _, files in os.walk("python"):
        for filename in files:
            children = os.path.join(directory_name, filename)
            zf.write(children)
    zf.close()


def disk_usage(path, compression_type):
    limits = {"zipped": 100, "unzipped": 300}
    out = run_command(f"du -sk {path}")
    result = int(out.split("\t")[0])
    result = round(result / 1024, 2)

    permission = True
    color = colorama.Fore.GREEN
    if result >= limits[compression_type] * 0.75:
        color = colorama.Fore.YELLOW
    if result >= limits[compression_type]:
        color = colorama.Fore.RED
        permission = False

    print(f"{color}. The {compression_type} format is {result} MB.")

    return permission


def layer_name(service):
    name = service.replace("-", "_")
    name = "nspehler"

    return name


def prepare_public():
    run_command("docker pull lambci/lambda:python3.8")
    output = run_command("docker run -it -d  lambci/lambda:build-python3.8 bash")
    container_id = output.replace("\n", "")

    run_command(f"docker cp requirements.txt {container_id}:/var/task/requirements.txt")

    inject = "mkdir python"
    os.system(f'docker exec -w /var/task {container_id} bash -c "{inject}"')
    inject = "pip install -t python -r requirements.txt"
    os.system(f'docker exec -w /var/task -it {container_id} bash -c "{inject}"')

    run_command(f"docker cp {container_id}:/var/task/python .")
    run_command(f"docker stop {container_id}")


def prepare_zip():
    shutil.rmtree("python", ignore_errors=True)
    os.mkdir("python")
    prepare_public()
    zip_folder()


def check_disk_usage():
    if not disk_usage("python", "unzipped"):
        return False
    if not disk_usage("layer.zip", "zipped"):
        return False

    return True


def publish_layer(clients, service):
    return clients["lambda"].publish_layer_version(
        LayerName=layer_name(service),
        Content={
            "S3Bucket": os.environ["S3_BUCKET"],
            "S3Key": f"{service}.zip",
        },
        CompatibleRuntimes=["python3.8"],
    )


def push_zip_s3(clients, service):
    with open("layer.zip", "rb") as file:
        clients["s3"].put_object(
            Bucket=os.environ["S3_BUCKET"],
            Body=bytes(file.read()),
            Key=f"{service}.zip",
        )


def clean():
    os.system("sudo rm -rf dist")
    os.system("sudo rm -rf build")
    os.system("sudo rm -rf python")
    os.remove("layer.zip")


def handler():
    clients = {"s3": boto3.client("s3"), "lambda": boto3.client("lambda")}
    service = "nspehler"

    prepare_zip()
    push_zip_s3(clients, service)

    if not check_disk_usage():
        return False

    layer = publish_layer(clients, service)
    arn = layer["LayerVersionArn"]
    print(f"\n< {arn}\n")

    clean()

    return True


if __name__ == "__main__":
    os.environ["AWS_PROFILE"] = "default"
    os.environ["AWS_DEFAULT_REGION"] = "eu-west-1"
    os.environ["S3_BUCKET"] = "nspehler-layers"

    colorama.init(autoreset=True)
    handler()
