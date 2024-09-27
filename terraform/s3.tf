resource "aws_s3_bucket" "nspehler" {
  bucket = "nspehler"
}

resource "aws_s3_bucket_public_access_block" "nspehler" {
  bucket = aws_s3_bucket.nspehler.id

  block_public_acls   = false
  block_public_policy = false
}

resource "aws_s3_bucket" "nspehler_layers" {
  bucket = "nspehler-layers"
}

resource "aws_s3_bucket_acl" "nspehler_layers" {
  bucket = aws_s3_bucket.nspehler_layers.id
  acl    = "private"
}

resource "aws_s3_bucket" "nspehler_layers_us" {
  bucket = "nspehler-layers-us"
  region = "us-east-1"
}

resource "aws_s3_bucket_acl" "nspehler_layers_us" {
  bucket = aws_s3_bucket.nspehler_layers_us.id
  acl    = "private"
}
