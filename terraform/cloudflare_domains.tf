# Domains kept after retiring their projects. They stay registered with
# Cloudflare and renew automatically, so their zones have to exist.
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

# Fastmail (portalmonitor.io)
resource "cloudflare_dns_record" "portalmonitor_fastmail_mx_1" {
  zone_id  = cloudflare_zone.portalmonitor.id
  name     = "portalmonitor.io"
  content  = "in1-smtp.messagingengine.com"
  type     = "MX"
  ttl      = 3600
  proxied  = false
  priority = 10
}

resource "cloudflare_dns_record" "portalmonitor_fastmail_mx_2" {
  zone_id  = cloudflare_zone.portalmonitor.id
  name     = "portalmonitor.io"
  content  = "in2-smtp.messagingengine.com"
  type     = "MX"
  ttl      = 3600
  proxied  = false
  priority = 20
}

resource "cloudflare_dns_record" "portalmonitor_fastmail_dkim_1" {
  zone_id = cloudflare_zone.portalmonitor.id
  name    = "fm1._domainkey.portalmonitor.io"
  content = "fm1.portalmonitor.io.dkim.fmhosted.com"
  type    = "CNAME"
  ttl     = 3600
  proxied = false
}

resource "cloudflare_dns_record" "portalmonitor_fastmail_dkim_2" {
  zone_id = cloudflare_zone.portalmonitor.id
  name    = "fm2._domainkey.portalmonitor.io"
  content = "fm2.portalmonitor.io.dkim.fmhosted.com"
  type    = "CNAME"
  ttl     = 3600
  proxied = false
}

resource "cloudflare_dns_record" "portalmonitor_fastmail_dkim_3" {
  zone_id = cloudflare_zone.portalmonitor.id
  name    = "fm3._domainkey.portalmonitor.io"
  content = "fm3.portalmonitor.io.dkim.fmhosted.com"
  type    = "CNAME"
  ttl     = 3600
  proxied = false
}

resource "cloudflare_dns_record" "portalmonitor_fastmail_spf" {
  zone_id = cloudflare_zone.portalmonitor.id
  name    = "portalmonitor.io"
  content = "v=spf1 include:spf.messagingengine.com ?all"
  type    = "TXT"
  ttl     = 3600
  proxied = false
}

import {
  to = cloudflare_zone.categoryapi
  id = "d88ab701190361b800e0514e40c4e229"
}

import {
  to = cloudflare_zone.realestatejobs
  id = "e8be78c2590bf12e15694d9257aaebdc"
}

import {
  to = cloudflare_zone.portalmonitor
  id = "a3eba1d56c022932b355e6ae64b672ed"
}

import {
  to = cloudflare_dns_record.portalmonitor_fastmail_mx_1
  id = "a3eba1d56c022932b355e6ae64b672ed/16533395df42ce6a523e69834ef8680e"
}

import {
  to = cloudflare_dns_record.portalmonitor_fastmail_mx_2
  id = "a3eba1d56c022932b355e6ae64b672ed/eab06f2d2cd3f52c6771040ee598c6bc"
}

import {
  to = cloudflare_dns_record.portalmonitor_fastmail_dkim_1
  id = "a3eba1d56c022932b355e6ae64b672ed/42adc04db8b1fe5f1a2b943dd680f5b5"
}

import {
  to = cloudflare_dns_record.portalmonitor_fastmail_dkim_2
  id = "a3eba1d56c022932b355e6ae64b672ed/36b3b7abcafad81db7167af05c4b6ed0"
}

import {
  to = cloudflare_dns_record.portalmonitor_fastmail_dkim_3
  id = "a3eba1d56c022932b355e6ae64b672ed/7fdcc65491532c65181175b78c815479"
}

import {
  to = cloudflare_dns_record.portalmonitor_fastmail_spf
  id = "a3eba1d56c022932b355e6ae64b672ed/599509d4ee09b00a5561303afb686093"
}
