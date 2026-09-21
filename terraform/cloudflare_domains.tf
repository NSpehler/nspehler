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
    value = ["nicolas@spehler.com"]
  }]
}

resource "cloudflare_email_routing_catch_all" "portalmonitor" {
  zone_id  = cloudflare_zone.portalmonitor.id
  name     = "Catch-all"
  enabled  = true
  matchers = [{ type = "all" }]
  actions = [{
    type  = "forward"
    value = ["nicolas@spehler.com"]
  }]
}

resource "cloudflare_dns_record" "portalmonitor_email_mx_1" {
  zone_id  = cloudflare_zone.portalmonitor.id
  name     = "portalmonitor.io"
  content  = "amir.mx.cloudflare.net"
  type     = "MX"
  ttl      = 3600
  proxied  = false
  priority = 10
}

resource "cloudflare_dns_record" "portalmonitor_email_mx_2" {
  zone_id  = cloudflare_zone.portalmonitor.id
  name     = "portalmonitor.io"
  content  = "linda.mx.cloudflare.net"
  type     = "MX"
  ttl      = 3600
  proxied  = false
  priority = 34
}

resource "cloudflare_dns_record" "portalmonitor_email_mx_3" {
  zone_id  = cloudflare_zone.portalmonitor.id
  name     = "portalmonitor.io"
  content  = "isaac.mx.cloudflare.net"
  type     = "MX"
  ttl      = 3600
  proxied  = false
  priority = 95
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
