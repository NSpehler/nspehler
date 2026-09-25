resource "tls_private_key" "dayiv_deploy" {
  algorithm = "ED25519"
}

resource "aws_secretsmanager_secret" "dayiv_deploy_key" {
  provider                = aws.us-east-1
  name                    = "dayiv/github-deploy-key"
  description             = "Read-only GitHub deploy key for NSpehler/dayiv, used by the vpn-proxy account check"
  recovery_window_in_days = 0
}

resource "aws_secretsmanager_secret_version" "dayiv_deploy_key" {
  provider      = aws.us-east-1
  secret_id     = aws_secretsmanager_secret.dayiv_deploy_key.id
  secret_string = tls_private_key.dayiv_deploy.private_key_openssh
}

resource "aws_ssm_document" "dayiv_account_check" {
  provider        = aws.us-east-1
  name            = "dayiv-account-check-setup"
  document_type   = "Command"
  document_format = "JSON"

  content = jsonencode({
    schemaVersion = "2.2"
    description   = "Install the Day IV account check: deploy key, sync script, systemd service and timer"
    mainSteps = [{
      action = "aws:runShellScript"
      name   = "setup"
      inputs = {
        timeoutSeconds = "1800"
        runCommand = [templatefile("${path.module}/files/dayiv-account-check-setup.sh.tftpl", {
          bun_version       = "1.4.2"
          deploy_key_secret = aws_secretsmanager_secret.dayiv_deploy_key.name
          github_host_key   = "github.com ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIOMqqnkVzrm0SdG6UOoqKLsabgH5C9okWi0dh2l9GKJl"
          sync_script       = trimspace(file("${path.module}/files/dayiv-sync.sh"))
          service_unit      = trimspace(file("${path.module}/files/dayiv-account-check.service"))
          timer_unit        = trimspace(file("${path.module}/files/dayiv-account-check.timer"))
        })]
      }
    }]
  })
}

resource "aws_ssm_association" "dayiv_account_check" {
  provider         = aws.us-east-1
  name             = aws_ssm_document.dayiv_account_check.name
  association_name = "dayiv-account-check"
  document_version = aws_ssm_document.dayiv_account_check.latest_version

  targets {
    key    = "InstanceIds"
    values = [aws_instance.vpn_proxy.id]
  }

  depends_on = [aws_secretsmanager_secret_version.dayiv_deploy_key]
}

output "dayiv_deploy_public_key" {
  value = tls_private_key.dayiv_deploy.public_key_openssh
}
