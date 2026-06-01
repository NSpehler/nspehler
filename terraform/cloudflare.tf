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

# DatoCMS
resource "cloudflare_dns_record" "datocms" {
  zone_id = cloudflare_zone.nspehler.id
  name    = "admin.${local.domain}"
  content = "admin.datocms.com"
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

# Google Search Console
resource "cloudflare_dns_record" "google_search_console" {
  zone_id = cloudflare_zone.nspehler.id
  name    = local.domain
  content = "google-site-verification=Y__5Y7XoBVl1u9B7y_zgRfBkMffRx0rkubzwxINERs4"
  type    = "TXT"
  ttl     = 1
  proxied = false
}
