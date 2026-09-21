resource "cloudflare_zone" "nspehler" {
  name = local.domain
  account = {
    id = var.cloudflare_account_id
  }
  type = "full"
}

resource "cloudflare_zone_setting" "ssl" {
  zone_id    = cloudflare_zone.nspehler.id
  setting_id = "ssl"
  value      = "full"
}

resource "cloudflare_zone_setting" "always_use_https" {
  zone_id    = cloudflare_zone.nspehler.id
  setting_id = "always_use_https"
  value      = "on"
}

resource "cloudflare_zone_setting" "automatic_https_rewrites" {
  zone_id    = cloudflare_zone.nspehler.id
  setting_id = "automatic_https_rewrites"
  value      = "on"
}

# Vercel
resource "cloudflare_dns_record" "vercel" {
  zone_id = cloudflare_zone.nspehler.id
  name    = local.domain
  content = "781b238b346f34de.vercel-dns-017.com"
  type    = "CNAME"
  ttl     = 1
  proxied = false
}

resource "cloudflare_dns_record" "vercel_www" {
  zone_id = cloudflare_zone.nspehler.id
  name    = "www.${local.domain}"
  content = "781b238b346f34de.vercel-dns-017.com"
  type    = "CNAME"
  ttl     = 1
  proxied = false
}

# Cloudflare Email
resource "cloudflare_dns_record" "cloudflare_email_mx_1" {
  zone_id  = cloudflare_zone.nspehler.id
  name     = local.domain
  content  = "isaac.mx.cloudflare.net"
  type     = "MX"
  ttl      = 3600
  proxied  = false
  priority = 95
}

resource "cloudflare_dns_record" "cloudflare_email_mx_2" {
  zone_id  = cloudflare_zone.nspehler.id
  name     = local.domain
  content  = "linda.mx.cloudflare.net"
  type     = "MX"
  ttl      = 3600
  proxied  = false
  priority = 34
}

resource "cloudflare_dns_record" "cloudflare_email_mx_3" {
  zone_id  = cloudflare_zone.nspehler.id
  name     = local.domain
  content  = "amir.mx.cloudflare.net"
  type     = "MX"
  ttl      = 3600
  proxied  = false
  priority = 10
}

resource "cloudflare_dns_record" "cloudflare_email_txt" {
  zone_id = cloudflare_zone.nspehler.id
  name    = local.domain
  content = "v=spf1 include:_spf.mx.cloudflare.net ~all"
  type    = "TXT"
  ttl     = 1
  proxied = false
}

resource "cloudflare_dns_record" "cloudflare_email_dkim" {
  zone_id = cloudflare_zone.nspehler.id
  name    = "cf2024-1._domainkey.${local.domain}"
  content = local.cloudflare_email_dkim
  type    = "TXT"
  ttl     = 1
  proxied = false
}

resource "cloudflare_email_routing_rule" "nicolas" {
  zone_id = cloudflare_zone.nspehler.id
  name    = "nicolas@${local.domain}"
  enabled = true
  matchers = [{
    type  = "literal"
    field = "to"
    value = "nicolas@${local.domain}"
  }]
  actions = [{
    type  = "forward"
    value = ["nicolas@spehler.com"]
  }]
}

resource "cloudflare_email_routing_catch_all" "nspehler" {
  zone_id  = cloudflare_zone.nspehler.id
  name     = "Catch-all"
  enabled  = true
  matchers = [{ type = "all" }]
  actions = [{
    type  = "forward"
    value = ["nicolas@spehler.com"]
  }]
}

import {
  to = cloudflare_dns_record.cloudflare_email_dkim
  id = "20ec2030590d760e2ffce41463303521/f6c7e4144fabc6b6392db27dfb915f2f"
}

import {
  to = cloudflare_email_routing_rule.nicolas
  id = "20ec2030590d760e2ffce41463303521/100034625f6040daaa59e05a76a26746"
}

import {
  to = cloudflare_email_routing_catch_all.nspehler
  id = "20ec2030590d760e2ffce41463303521"
}

# Google Search Console
resource "cloudflare_dns_record" "google_search_console" {
  zone_id = cloudflare_zone.nspehler.id
  name    = local.domain
  content = "google-site-verification=Y__5Y7XoBVl1u9B7y_zgRfBkMffRx0rkubzwxINERs4"
  type    = "TXT"
  ttl     = 1
  proxied = false
}

locals {
  cloudflare_email_dkim = "\"v=DKIM1; h=sha256; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAiweykoi+o48IOGuP7GR3X0MOExCUDY/BCRHoWBnh3rChl7WhdyCxW3jgq1daEjPPqoi7sJvdg5hEQVsgVRQP4DcnQDVjGMbASQtrY4WmB1VebF+RPJB2ECPsEDTpeiI5ZyUAwJaVX7r6bznU67g7LvFq35yIo4sdlmtZGV+i0H4cpYH9+3JJ78k\" \"m4KXwaf9xUJCWF6nxeD+qG6Fyruw1Qlbds2r85U9dkNDVAS3gioCvELryh1TxKGiVTkg4wqHTyHfWsp7KD3WQHYJn0RyfJJu6YEmL77zonn7p2SRMvTMP3ZEXibnC9gz3nnhR6wcYL8Q7zXypKTMD58bTixDSJwIDAQAB\""
}
