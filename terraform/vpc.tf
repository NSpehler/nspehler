resource "aws_vpc" "nspehler" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = false
  enable_dns_support   = true

  tags = {
    Name = "nspehler-vpc"
  }
}

resource "aws_subnet" "nspehler" {
  vpc_id                  = aws_vpc.nspehler.id
  cidr_block              = "10.0.1.0/24"
  availability_zone       = "eu-west-1a"
  map_public_ip_on_launch = true
  
  tags = {
    Name = "nspehler-subnet"
  }
}

resource "aws_security_group" "nspehler" {
  name        = "default"
  description = "default VPC security group"
  vpc_id      = aws_vpc.nspehler.id

  ingress {
    cidr_blocks = [
      "0.0.0.0/0"
    ]
    from_port = 0
    to_port   = 65535
    protocol  = "tcp"
  }

  ingress {
    cidr_blocks = [
      "0.0.0.0/0"
    ]
    from_port = 0
    to_port   = 65535
    protocol  = "udp"
  }

  ingress {
    cidr_blocks = []
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    self        = true
  }

  egress {
    cidr_blocks = [
      "0.0.0.0/0"
    ]
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
  }

  tags = {
    Name = "nspehler-sg"
  }
}

resource "aws_internet_gateway" "nspehler" {
  vpc_id   = aws_vpc.nspehler.id

  tags = {
    Name = "nspehler-igw"
  }
}

resource "aws_route_table" "nspehler" {
  vpc_id   = aws_vpc.nspehler.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.nspehler.id
  }

  tags = {
    Name = "nspehler-rtb"
  }
}