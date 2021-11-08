locals {
  aws_region       = "eu-west-1"
  aws_profile      = "default"
  cloudflare_email = "nspehler@hey.com"
  domain           = "nspehler.com"
}

provider "aws" {
  region  = local.aws_region
  profile = local.aws_profile
}

provider "aws" {
  region  = "us-east-1"
  alias   = "us-east-1"
  profile = local.aws_profile
}

data "aws_caller_identity" "current" {}

provider "cloudflare" {
  email = local.cloudflare_email
  api_key = var.cloudflare_api_key
}

# Backup Terraform state in S3
terraform {
  backend "s3" {
    bucket         = "nspehler-terraform"
    dynamodb_table = "nspehler-terraform"
    key            = "terraform.tfstate"
    region         = "eu-west-1"
    profile        = "default"
    encrypt        = true
  }
}