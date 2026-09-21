resource "aws_secretsmanager_secret" "nspehler" {
  name = "nspehler/prod"
}

import {
  to = aws_secretsmanager_secret.nspehler
  id = "arn:aws:secretsmanager:eu-west-1:035114897561:secret:nspehler/prod-iK63Ft"
}
