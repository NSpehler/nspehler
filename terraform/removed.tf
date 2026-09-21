# The retired nspehler VPC's default security group and main route table
# can't be deleted on their own, so forget them and let the VPC take them.
removed {
  from = aws_security_group.nspehler

  lifecycle {
    destroy = false
  }
}

removed {
  from = aws_route_table.nspehler

  lifecycle {
    destroy = false
  }
}
