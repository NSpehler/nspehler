resource "tls_private_key" "nspehler" {
  algorithm = "RSA"
  rsa_bits  = 4096
}

resource "aws_key_pair" "nspehler" {
  key_name   = "nspehler"
  public_key = tls_private_key.nspehler.public_key_openssh
}

resource "aws_instance" "nspehler" {
  ami                    = "ami-0b91bd72"
  instance_type          = "t2.micro"
  key_name               = "NSpehler"
  subnet_id              = aws_subnet.nspehler.id
  vpc_security_group_ids = [aws_security_group.nspehler.id]

  tags = {
    Name = "nspehler"
  }
}

resource "aws_eip" "nspehler" {
  instance = aws_instance.nspehler.id
  vpc      = true
}

output "nspehler_private_key_pem" {
  value       = tls_private_key.nspehler.private_key_pem
  description = "Private key pair for connecting to the EC2 instance"
  sensitive   = true
}