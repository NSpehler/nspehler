data "tls_certificate" "github_oidc" {
  url = "https://token.actions.githubusercontent.com"
}

resource "aws_iam_openid_connect_provider" "github" {
  url             = "https://token.actions.githubusercontent.com"
  client_id_list  = ["sts.amazonaws.com"]
  thumbprint_list = [data.tls_certificate.github_oidc.certificates[0].sha1_fingerprint]
}

data "aws_iam_policy_document" "offtherecord_deploy_trust" {
  statement {
    actions = ["sts:AssumeRoleWithWebIdentity"]

    principals {
      type        = "Federated"
      identifiers = [aws_iam_openid_connect_provider.github.arn]
    }

    condition {
      test     = "StringEquals"
      variable = "token.actions.githubusercontent.com:aud"
      values   = ["sts.amazonaws.com"]
    }

    condition {
      test     = "StringLike"
      variable = "token.actions.githubusercontent.com:sub"
      values   = ["repo:NSpehler/offtherecord:ref:refs/heads/main"]
    }
  }
}

resource "aws_iam_role" "offtherecord_deploy" {
  name               = "offtherecord-github-deploy"
  assume_role_policy = data.aws_iam_policy_document.offtherecord_deploy_trust.json
}

resource "aws_iam_role_policy_attachment" "offtherecord_deploy_admin" {
  role       = aws_iam_role.offtherecord_deploy.name
  policy_arn = "arn:aws:iam::aws:policy/AdministratorAccess"
}

output "offtherecord_deploy_role_arn" {
  value = aws_iam_role.offtherecord_deploy.arn
}
