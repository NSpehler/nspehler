variable "nord_ovpn_config" {
  type        = string
  description = "Full contents of the NordVPN .ovpn file for the dedicated server"
  sensitive   = true
}

variable "nord_username" {
  type        = string
  description = "NordVPN service credentials username"
  sensitive   = true
}

variable "nord_password" {
  type        = string
  description = "NordVPN service credentials password"
  sensitive   = true
}

resource "random_password" "vpn_proxy" {
  length  = 32
  special = false
}

resource "aws_vpc" "vpn_proxy" {
  provider             = aws.us-east-1
  cidr_block           = "10.10.0.0/16"
  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = { Name = "vpn-proxy-vpc" }
}

resource "aws_subnet" "vpn_proxy" {
  provider                = aws.us-east-1
  vpc_id                  = aws_vpc.vpn_proxy.id
  cidr_block              = "10.10.1.0/24"
  availability_zone       = "us-east-1a"
  map_public_ip_on_launch = true

  tags = { Name = "vpn-proxy-subnet" }
}

resource "aws_internet_gateway" "vpn_proxy" {
  provider = aws.us-east-1
  vpc_id   = aws_vpc.vpn_proxy.id

  tags = { Name = "vpn-proxy-igw" }
}

resource "aws_route_table" "vpn_proxy" {
  provider = aws.us-east-1
  vpc_id   = aws_vpc.vpn_proxy.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.vpn_proxy.id
  }

  tags = { Name = "vpn-proxy-rtb" }
}

resource "aws_route_table_association" "vpn_proxy" {
  provider       = aws.us-east-1
  subnet_id      = aws_subnet.vpn_proxy.id
  route_table_id = aws_route_table.vpn_proxy.id
}

resource "aws_security_group" "vpn_proxy" {
  provider    = aws.us-east-1
  name        = "vpn-proxy"
  description = "NordVPN dedicated-IP HTTP proxy"
  vpc_id      = aws_vpc.vpn_proxy.id

  ingress {
    description = "tinyproxy"
    from_port   = 8888
    to_port     = 8888
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = { Name = "vpn-proxy-sg" }
}

resource "aws_secretsmanager_secret" "vpn_proxy" {
  provider                = aws.us-east-1
  name                    = "vpn-proxy/nordvpn"
  description             = "NordVPN credentials and OpenVPN config for the HTTP proxy"
  recovery_window_in_days = 0
}

resource "aws_secretsmanager_secret_version" "vpn_proxy" {
  provider  = aws.us-east-1
  secret_id = aws_secretsmanager_secret.vpn_proxy.id
  secret_string = jsonencode({
    ovpn_config    = var.nord_ovpn_config
    nord_username  = var.nord_username
    nord_password  = var.nord_password
    proxy_username = "nspehler"
    proxy_password = random_password.vpn_proxy.result
  })
}

resource "aws_iam_role" "vpn_proxy" {
  name = "vpn-proxy"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect    = "Allow"
      Principal = { Service = "ec2.amazonaws.com" }
      Action    = "sts:AssumeRole"
    }]
  })
}

resource "aws_iam_role_policy_attachment" "vpn_proxy_ssm" {
  role       = aws_iam_role.vpn_proxy.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore"
}

resource "aws_iam_role_policy" "vpn_proxy_secrets" {
  name = "read-nordvpn-secret"
  role = aws_iam_role.vpn_proxy.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect   = "Allow"
      Action   = "secretsmanager:GetSecretValue"
      Resource = aws_secretsmanager_secret.vpn_proxy.arn
    }]
  })
}

resource "aws_iam_instance_profile" "vpn_proxy" {
  name = "vpn-proxy"
  role = aws_iam_role.vpn_proxy.name
}

data "aws_ami" "al2023" {
  provider    = aws.us-east-1
  most_recent = true
  owners      = ["amazon"]

  filter {
    name   = "name"
    values = ["al2023-ami-2023.*-x86_64"]
  }
}

resource "aws_instance" "vpn_proxy" {
  provider               = aws.us-east-1
  ami                    = data.aws_ami.al2023.id
  instance_type          = "t3.nano"
  subnet_id              = aws_subnet.vpn_proxy.id
  vpc_security_group_ids = [aws_security_group.vpn_proxy.id]
  iam_instance_profile   = aws_iam_instance_profile.vpn_proxy.name

  user_data = templatefile("${path.module}/vpn_proxy_userdata.sh.tftpl", {
    secret_id = aws_secretsmanager_secret.vpn_proxy.name
    region    = "us-east-1"
  })

  user_data_replace_on_change = true

  tags = { Name = "vpn-proxy" }

  depends_on = [aws_secretsmanager_secret_version.vpn_proxy]
}

resource "aws_eip" "vpn_proxy" {
  provider = aws.us-east-1
  instance = aws_instance.vpn_proxy.id
  domain   = "vpc"

  tags = { Name = "vpn-proxy-eip" }
}

output "vpn_proxy_public_ip" {
  value = aws_eip.vpn_proxy.public_ip
}

output "vpn_proxy_url" {
  value     = "http://nspehler:${random_password.vpn_proxy.result}@${aws_eip.vpn_proxy.public_ip}:8888"
  sensitive = true
}

output "vpn_proxy_password" {
  value     = random_password.vpn_proxy.result
  sensitive = true
}
