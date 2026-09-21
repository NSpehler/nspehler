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

import {
  to = cloudflare_dns_record.categoryapi_email_mx_1
  id = "d88ab701190361b800e0514e40c4e229/7cdcadfb167347584e03a7b5e289a665"
}

import {
  to = cloudflare_dns_record.categoryapi_email_mx_2
  id = "d88ab701190361b800e0514e40c4e229/1fa22a2993214a4c0d53c27d55e5f17d"
}

import {
  to = cloudflare_dns_record.categoryapi_email_mx_3
  id = "d88ab701190361b800e0514e40c4e229/cc687903188d4d84e19baf5f3b1b94b4"
}

import {
  to = cloudflare_dns_record.realestatejobs_email_mx_1
  id = "e8be78c2590bf12e15694d9257aaebdc/a225b4fa7a2dd21285d9fd32ba2fba17"
}

import {
  to = cloudflare_dns_record.realestatejobs_email_mx_2
  id = "e8be78c2590bf12e15694d9257aaebdc/e63970bab070dd31cd431c052bda41a3"
}

import {
  to = cloudflare_dns_record.realestatejobs_email_mx_3
  id = "e8be78c2590bf12e15694d9257aaebdc/cb556be7466b73689fff8eaa2906836f"
}
