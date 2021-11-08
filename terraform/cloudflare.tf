resource "cloudflare_zone" "nspehler" {
  zone = local.domain
  plan = "free"
  type = "full"
}

resource "cloudflare_zone_settings_override" "nspehler" {
  zone_id = cloudflare_zone.nspehler.id

  settings {
    ssl                      = "strict"
    always_use_https         = "on"
    automatic_https_rewrites = "on"
  }
}

# Gatsby Cloud
resource "cloudflare_record" "gatsby_cloud" {
  zone_id = cloudflare_zone.nspehler.id
  name    = local.domain
  value   = "199.232.194.22"
  type    = "A"
  ttl     = "1"
  proxied = "false"
}

resource "cloudflare_record" "gatsby_cloud_secondary" {
  zone_id = cloudflare_zone.nspehler.id
  name    = local.domain
  value   = "199.232.198.22"
  type    = "A"
  ttl     = "1"
  proxied = "false"
}

resource "cloudflare_record" "gatsby_cloud_www" {
  zone_id = cloudflare_zone.nspehler.id
  name    = "www"
  value   = "nspehler.gatsbyjs.io"
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