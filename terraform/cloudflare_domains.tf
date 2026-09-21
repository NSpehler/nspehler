resource "cloudflare_zone" "categoryapi" {
  name = "categoryapi.com"
  account = {
    id = var.cloudflare_account_id
  }
  type = "full"
}

resource "cloudflare_zone" "realestatejobs" {
  name = "realestatejobs.io"
  account = {
    id = var.cloudflare_account_id
  }
  type = "full"
}

resource "cloudflare_zone" "portalmonitor" {
  name = "portalmonitor.io"
  account = {
    id = var.cloudflare_account_id
  }
  type = "full"
}

# Cloudflare Email
resource "cloudflare_email_routing_rule" "portalmonitor_nicolas" {
  zone_id = cloudflare_zone.portalmonitor.id
  name    = "nicolas@portalmonitor.io"
  enabled = true
  matchers = [{
    type  = "literal"
    field = "to"
    value = "nicolas@portalmonitor.io"
  }]
  actions = [{
    type  = "forward"
    value = [cloudflare_email_routing_address.nicolas.email]
  }]
}

resource "cloudflare_email_routing_catch_all" "portalmonitor" {
  zone_id  = cloudflare_zone.portalmonitor.id
  name     = "Catch-all"
  enabled  = true
  matchers = [{ type = "all" }]
  actions = [{
    type  = "forward"
    value = [cloudflare_email_routing_address.nicolas.email]
  }]
}

resource "cloudflare_dns_record" "portalmonitor_email_mx_1" {
  zone_id  = cloudflare_zone.portalmonitor.id
  name     = "portalmonitor.io"
  content  = "amir.mx.cloudflare.net"
  type     = "MX"
  ttl      = 1
  proxied  = false
  priority = 51
}

resource "cloudflare_dns_record" "portalmonitor_email_mx_2" {
  zone_id  = cloudflare_zone.portalmonitor.id
  name     = "portalmonitor.io"
  content  = "linda.mx.cloudflare.net"
  type     = "MX"
  ttl      = 1
  proxied  = false
  priority = 64
}

resource "cloudflare_dns_record" "portalmonitor_email_mx_3" {
  zone_id  = cloudflare_zone.portalmonitor.id
  name     = "portalmonitor.io"
  content  = "isaac.mx.cloudflare.net"
  type     = "MX"
  ttl      = 1
  proxied  = false
  priority = 47
}

resource "cloudflare_dns_record" "portalmonitor_email_spf" {
  zone_id = cloudflare_zone.portalmonitor.id
  name    = "portalmonitor.io"
  content = "v=spf1 include:_spf.mx.cloudflare.net ~all"
  type    = "TXT"
  ttl     = 1
  proxied = false
}

resource "cloudflare_dns_record" "portalmonitor_email_dkim" {
  zone_id = cloudflare_zone.portalmonitor.id
  name    = "cf2024-1._domainkey.portalmonitor.io"
  content = local.cloudflare_email_dkim
  type    = "TXT"
  ttl     = 1
  proxied = false
}

resource "cloudflare_email_routing_rule" "categoryapi_nicolas" {
  zone_id = cloudflare_zone.categoryapi.id
  name    = "nicolas@categoryapi.com"
  enabled = true
  matchers = [{
    type  = "literal"
    field = "to"
    value = "nicolas@categoryapi.com"
  }]
  actions = [{
    type  = "forward"
    value = [cloudflare_email_routing_address.nicolas.email]
  }]
}

resource "cloudflare_dns_record" "categoryapi_email_mx_1" {
  zone_id  = cloudflare_zone.categoryapi.id
  name     = "categoryapi.com"
  content  = "route1.mx.cloudflare.net"
  type     = "MX"
  ttl      = 1
  proxied  = false
  priority = 52
}

resource "cloudflare_dns_record" "categoryapi_email_mx_2" {
  zone_id  = cloudflare_zone.categoryapi.id
  name     = "categoryapi.com"
  content  = "route2.mx.cloudflare.net"
  type     = "MX"
  ttl      = 1
  proxied  = false
  priority = 91
}

resource "cloudflare_dns_record" "categoryapi_email_mx_3" {
  zone_id  = cloudflare_zone.categoryapi.id
  name     = "categoryapi.com"
  content  = "route3.mx.cloudflare.net"
  type     = "MX"
  ttl      = 1
  proxied  = false
  priority = 12
}

resource "cloudflare_dns_record" "categoryapi_email_spf" {
  zone_id = cloudflare_zone.categoryapi.id
  name    = "categoryapi.com"
  content = "v=spf1 include:_spf.mx.cloudflare.net ~all"
  type    = "TXT"
  ttl     = 1
  proxied = false
}

resource "cloudflare_dns_record" "categoryapi_email_dkim" {
  zone_id = cloudflare_zone.categoryapi.id
  name    = "cf2024-1._domainkey.categoryapi.com"
  content = local.cloudflare_email_dkim
  type    = "TXT"
  ttl     = 1
  proxied = false
}

resource "cloudflare_email_routing_rule" "realestatejobs_nicolas" {
  zone_id = cloudflare_zone.realestatejobs.id
  name    = "nicolas@realestatejobs.io"
  enabled = true
  matchers = [{
    type  = "literal"
    field = "to"
    value = "nicolas@realestatejobs.io"
  }]
  actions = [{
    type  = "forward"
    value = [cloudflare_email_routing_address.nicolas.email]
  }]
}

resource "cloudflare_dns_record" "realestatejobs_email_mx_1" {
  zone_id  = cloudflare_zone.realestatejobs.id
  name     = "realestatejobs.io"
  content  = "amir.mx.cloudflare.net"
  type     = "MX"
  ttl      = 1
  proxied  = false
  priority = 7
}

resource "cloudflare_dns_record" "realestatejobs_email_mx_2" {
  zone_id  = cloudflare_zone.realestatejobs.id
  name     = "realestatejobs.io"
  content  = "linda.mx.cloudflare.net"
  type     = "MX"
  ttl      = 1
  proxied  = false
  priority = 36
}

resource "cloudflare_dns_record" "realestatejobs_email_mx_3" {
  zone_id  = cloudflare_zone.realestatejobs.id
  name     = "realestatejobs.io"
  content  = "isaac.mx.cloudflare.net"
  type     = "MX"
  ttl      = 1
  proxied  = false
  priority = 33
}

resource "cloudflare_dns_record" "realestatejobs_email_spf" {
  zone_id = cloudflare_zone.realestatejobs.id
  name    = "realestatejobs.io"
  content = "v=spf1 include:_spf.mx.cloudflare.net ~all"
  type    = "TXT"
  ttl     = 1
  proxied = false
}

resource "cloudflare_dns_record" "realestatejobs_email_dkim" {
  zone_id = cloudflare_zone.realestatejobs.id
  name    = "cf2024-1._domainkey.realestatejobs.io"
  content = local.cloudflare_email_dkim
  type    = "TXT"
  ttl     = 1
  proxied = false
}
