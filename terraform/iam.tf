resource "aws_iam_user" "nicolas" {
  name = "nicolas"
}

resource "aws_iam_access_key" "nicolas" {
  user = aws_iam_user.nicolas.name
}

resource "aws_iam_user_policy_attachment" "administrator_access" {
  user       = aws_iam_user.nicolas.name
  policy_arn = "arn:aws:iam::aws:policy/AdministratorAccess"
}
