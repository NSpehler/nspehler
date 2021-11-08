resource "aws_dynamodb_table" "nspehler_terraform" {
  name = "nspehler-terraform"
  read_capacity  = 1
  write_capacity = 1
  hash_key       = "LockID"

  attribute {
    name = "LockID"
    type = "S"
  }
}