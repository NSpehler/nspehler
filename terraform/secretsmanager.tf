resource "aws_secretsmanager_secret" "nspehler" {
  name = "nspehler/prod"
}

resource "aws_secretsmanager_secret" "discogs_session" {
  name = "offtherecord/discogs-session"
}

resource "aws_secretsmanager_secret" "discogs_login" {
  name = "offtherecord/discogs-login"
}
