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
moved {
  from = cloudflare_record.vercel
  to   = cloudflare_dns_record.vercel
}

resource "cloudflare_dns_record" "vercel" {
  zone_id = cloudflare_zone.nspehler.id
  name    = local.domain
  content = "781b238b346f34de.vercel-dns-017.com"
  type    = "CNAME"
  ttl     = 1
  proxied = false
}

moved {
  from = cloudflare_record.vercel_www
  to   = cloudflare_dns_record.vercel_www
}

resource "cloudflare_dns_record" "vercel_www" {
  zone_id = cloudflare_zone.nspehler.id
  name    = "www.${local.domain}"
  content = "781b238b346f34de.vercel-dns-017.com"
  type    = "CNAME"
  ttl     = 1
  proxied = false
}

# DatoCMS
moved {
  from = cloudflare_record.datocms
  to   = cloudflare_dns_record.datocms
}

resource "cloudflare_dns_record" "datocms" {
  zone_id = cloudflare_zone.nspehler.id
  name    = "admin.${local.domain}"
  content = "admin.datocms.com"
  type    = "CNAME"
  ttl     = 1
  proxied = false
}

# Cloudflare Email
moved {
  from = cloudflare_record.cloudflare_email_mx_1
  to   = cloudflare_dns_record.cloudflare_email_mx_1
}

resource "cloudflare_dns_record" "cloudflare_email_mx_1" {
  zone_id  = cloudflare_zone.nspehler.id
  name     = local.domain
  content  = "isaac.mx.cloudflare.net"
  type     = "MX"
  ttl      = 3600
  proxied  = false
  priority = 95
}

moved {
  from = cloudflare_record.cloudflare_email_mx_2
  to   = cloudflare_dns_record.cloudflare_email_mx_2
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

moved {
  from = cloudflare_record.cloudflare_email_mx_3
  to   = cloudflare_dns_record.cloudflare_email_mx_3
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

moved {
  from = cloudflare_record.cloudflare_email_txt
  to   = cloudflare_dns_record.cloudflare_email_txt
}

resource "cloudflare_dns_record" "cloudflare_email_txt" {
  zone_id = cloudflare_zone.nspehler.id
  name    = local.domain
  content = "v=spf1 include:_spf.mx.cloudflare.net ~all"
  type    = "TXT"
  ttl     = 1
  proxied = false
}

# Google Search Console
moved {
  from = cloudflare_record.google_search_console
  to   = cloudflare_dns_record.google_search_console
}

resource "cloudflare_dns_record" "google_search_console" {
  zone_id = cloudflare_zone.nspehler.id
  name    = local.domain
  content = "google-site-verification=Y__5Y7XoBVl1u9B7y_zgRfBkMffRx0rkubzwxINERs4"
  type    = "TXT"
  ttl     = 1
  proxied = false
}
