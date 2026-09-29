locals {
  name   = "Nicolas Spehler"
  domain = "nspehler.com"
}

provider "aws" {}

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