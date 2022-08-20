locals {
  name   = "Nicolas Spehler"
  domain = "nspehler.com"
}

provider "aws" {}

provider "aws" {
  region  = "us-east-1"
  alias   = "us-east-1"
}

data "aws_caller_identity" "current" {}

provider "cloudflare" {}

provider "mongodbatlas" {}

terraform {
  cloud {
    organization = "nspehler"
    workspaces {
      name = "nspehler"
    }
  }
}