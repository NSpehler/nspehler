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

# Ghost Admin
resource "cloudflare_record" "ghost_admin" {
  zone_id = cloudflare_zone.nspehler.id
  name    = "admin"
  value   = aws_eip.nspehler.public_ip
  type    = "A"
  ttl     = "1"
  proxied = "true"
}
