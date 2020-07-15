locals {
  aws_region       = "eu-west-1"
  aws_profile      = "nspehler"
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

provider "cloudflare" {
  email = local.cloudflare_email
}
