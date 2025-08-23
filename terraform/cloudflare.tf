resource "cloudflare_zone" "nspehler" {
  zone = local.domain
  plan = "free"
  type = "full"
}

resource "cloudflare_zone_settings_override" "nspehler" {
  zone_id = cloudflare_zone.nspehler.id

  settings {
    ssl                      = "full"
    always_use_https         = "on"
    automatic_https_rewrites = "on"
  }
}

# Vercel
resource "cloudflare_record" "vercel" {
  zone_id = cloudflare_zone.nspehler.id
  name    = local.domain
  value   = "76.76.21.21"
  type    = "A"
  ttl     = "1"
  proxied = "false"
}

resource "cloudflare_record" "vercel_www" {
  zone_id = cloudflare_zone.nspehler.id
  name    = "www"
  value   = "cname.vercel-dns.com"
  type    = "CNAME"
  ttl     = "1"
  proxied = "false"
}

# DatoCMS
resource "cloudflare_record" "datocms" {
  zone_id = cloudflare_zone.nspehler.id
  name    = "admin"
  value   = "admin.datocms.com"
  type    = "CNAME"
  ttl     = "1"
  proxied = "false"
}

# Cloudflare Email
resource "cloudflare_record" "cloudflare_email_mx_1" {
  zone_id  = cloudflare_zone.nspehler.id
  name     = local.domain
  value    = "isaac.mx.cloudflare.net"
  type     = "MX"
  ttl      = "3600"
  proxied  = "false"
  priority = "95"
}

resource "cloudflare_record" "cloudflare_email_mx_2" {
  zone_id  = cloudflare_zone.nspehler.id
  name     = local.domain
  value    = "linda.mx.cloudflare.net"
  type     = "MX"
  ttl      = "3600"
  proxied  = "false"
  priority = "34"
}

resource "cloudflare_record" "cloudflare_email_mx_3" {
  zone_id  = cloudflare_zone.nspehler.id
  name     = local.domain
  value    = "amir.mx.cloudflare.net"
  type     = "MX"
  ttl      = "3600"
  proxied  = "false"
  priority = "10"
}

resource "cloudflare_record" "cloudflare_email_txt" {
  zone_id = cloudflare_zone.nspehler.id
  name    = local.domain
  value   = "v=spf1 include:_spf.mx.cloudflare.net ~all"
  type    = "TXT"
  ttl     = "1"
  proxied = "false"
}

# Google Search Console
resource "cloudflare_record" "google_search_console" {
  zone_id = cloudflare_zone.nspehler.id
  name    = local.domain
  value   = "google-site-verification=Y__5Y7XoBVl1u9B7y_zgRfBkMffRx0rkubzwxINERs4"
  type    = "TXT"
  ttl     = "1"
  proxied = "false"
}