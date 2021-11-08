resource "aws_s3_bucket" "nspehler_terraform" {
  bucket = "nspehler-terraform"
  acl    = "private"

  server_side_encryption_configuration {
    rule {
      apply_server_side_encryption_by_default {
        sse_algorithm = "AES256"
      }
    }
  }

  lifecycle {
    prevent_destroy = true
  }

  versioning {
    enabled = true
  }
}

resource "aws_s3_bucket_public_access_block" "nspehler_terraform" {
  bucket                  = aws_s3_bucket.nspehler_terraform.id
  block_public_acls       = true
  ignore_public_acls      = true
  block_public_policy     = true
  restrict_public_buckets = true
}