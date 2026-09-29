removed {
  from = random_password.vpn_proxy

  lifecycle {
    destroy = false
  }
}

removed {
  from = aws_vpc.vpn_proxy

  lifecycle {
    destroy = false
  }
}

removed {
  from = aws_subnet.vpn_proxy

  lifecycle {
    destroy = false
  }
}

removed {
  from = aws_internet_gateway.vpn_proxy

  lifecycle {
    destroy = false
  }
}

removed {
  from = aws_route_table.vpn_proxy

  lifecycle {
    destroy = false
  }
}

removed {
  from = aws_route_table_association.vpn_proxy

  lifecycle {
    destroy = false
  }
}

removed {
  from = aws_security_group.vpn_proxy

  lifecycle {
    destroy = false
  }
}

removed {
  from = aws_secretsmanager_secret.vpn_proxy

  lifecycle {
    destroy = false
  }
}

removed {
  from = aws_secretsmanager_secret_version.vpn_proxy

  lifecycle {
    destroy = false
  }
}

removed {
  from = aws_iam_role.vpn_proxy

  lifecycle {
    destroy = false
  }
}

removed {
  from = aws_iam_role_policy_attachment.vpn_proxy_ssm

  lifecycle {
    destroy = false
  }
}

removed {
  from = aws_iam_role_policy.vpn_proxy_secrets

  lifecycle {
    destroy = false
  }
}

removed {
  from = aws_iam_role_policy.vpn_proxy_discogs

  lifecycle {
    destroy = false
  }
}

removed {
  from = aws_iam_instance_profile.vpn_proxy

  lifecycle {
    destroy = false
  }
}

removed {
  from = aws_instance.vpn_proxy

  lifecycle {
    destroy = false
  }
}

removed {
  from = aws_eip.vpn_proxy

  lifecycle {
    destroy = false
  }
}

removed {
  from = tls_private_key.dayiv_deploy

  lifecycle {
    destroy = false
  }
}

removed {
  from = aws_secretsmanager_secret.dayiv_deploy_key

  lifecycle {
    destroy = false
  }
}

removed {
  from = aws_secretsmanager_secret_version.dayiv_deploy_key

  lifecycle {
    destroy = false
  }
}

removed {
  from = aws_ssm_document.dayiv_account_check

  lifecycle {
    destroy = false
  }
}

removed {
  from = aws_ssm_association.dayiv_account_check

  lifecycle {
    destroy = false
  }
}
