resource "aws_vpc" "nspehler" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true
  enable_dns_support   = true
}

resource "aws_subnet" "nspehler" {
  vpc_id            = aws_vpc.nspehler.id
  cidr_block        = cidrsubnet(aws_vpc.nspehler.cidr_block, 3, 1)
  availability_zone = "eu-west-1a"
}

resource "aws_security_group" "nspehler" {
  name   = "allow_all"
  vpc_id = aws_vpc.nspehler.id

  ingress {
    cidr_blocks = [
      "0.0.0.0/0"
    ]
    from_port = 22
    to_port   = 22
    protocol  = "tcp"
  }

  ingress {
    cidr_blocks = [
      "0.0.0.0/0"
    ]
    ipv6_cidr_blocks = [
      "::/0",
    ]
    from_port = 80
    to_port   = 80
    protocol  = "tcp"
  }

  ingress {
    cidr_blocks = [
      "0.0.0.0/0"
    ]
    ipv6_cidr_blocks = [
      "::/0",
    ]
    from_port = 443
    to_port   = 443
    protocol  = "tcp"
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_internet_gateway" "nspehler" {
  vpc_id = aws_vpc.nspehler.id
}

resource "aws_route_table" "nspehler" {
  vpc_id = aws_vpc.nspehler.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.nspehler.id
  }
}

resource "aws_route_table_association" "nspehler" {
  subnet_id      = aws_subnet.nspehler.id
  route_table_id = aws_route_table.nspehler.id
}
