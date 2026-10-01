removed {
  from = cloudflare_zone.endless_engineer
  lifecycle {
    destroy = false
  }
}

removed {
  from = cloudflare_zone_dnssec.endless_engineer
  lifecycle {
    destroy = false
  }
}

removed {
  from = cloudflare_dns_record.endless_engineer_apex
  lifecycle {
    destroy = false
  }
}

removed {
  from = cloudflare_page_rule.endless_engineer_redirect
  lifecycle {
    destroy = false
  }
}

removed {
  from = cloudflare_page_rule.endless_engineer_redirect_subdomains
  lifecycle {
    destroy = false
  }
}
