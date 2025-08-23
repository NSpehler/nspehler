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

resource "aws_s3_bucket_public_access_block" "nspehler_layers" {
  bucket = aws_s3_bucket.nspehler_layers.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket" "nspehler_layers_us" {
  provider = aws.us-east-1
  bucket   = "nspehler-layers-us"
}

resource "aws_s3_bucket_public_access_block" "nspehler_layers_us" {
  provider = aws.us-east-1
  bucket   = aws_s3_bucket.nspehler_layers_us.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}
