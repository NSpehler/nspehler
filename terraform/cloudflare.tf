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

# DatoCMS
resource "cloudflare_record" "datocms" {
  zone_id = cloudflare_zone.nspehler.id
  name    = "admin"
  value   = "admin.datocms.com"
  type    = "CNAME"
  ttl     = "1"
  proxied = "false"
}