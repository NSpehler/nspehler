terraform {
  required_providers {
    cloudflare = {
      source = "cloudflare/cloudflare"
      version = "2.17.0"
    }
    mongodbatlas = {
      source = "mongodb/mongodbatlas"
      version = "0.8.0"
    }
  }
}