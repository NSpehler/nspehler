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

resource "cloudflare_zone" "endless_engineer" {
  name = "endless.engineer"
  account = {
    id = var.cloudflare_account_id
  }
  type = "full"
}

resource "cloudflare_zone" "leanmarketingforstartups" {
  name = "leanmarketingforstartups.com"
  account = {
    id = var.cloudflare_account_id
  }
  type = "full"
}

resource "cloudflare_zone" "nicolasspehler" {
  name = "nicolasspehler.com"
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
  ttl      = 1
  proxied  = false
  priority = 51
}

resource "cloudflare_dns_record" "portalmonitor_email_mx_2" {
  zone_id  = cloudflare_zone.portalmonitor.id
  name     = "portalmonitor.io"
  content  = "linda.mx.cloudflare.net"
  type     = "MX"
  ttl      = 1
  proxied  = false
  priority = 64
}

resource "cloudflare_dns_record" "portalmonitor_email_mx_3" {
  zone_id  = cloudflare_zone.portalmonitor.id
  name     = "portalmonitor.io"
  content  = "isaac.mx.cloudflare.net"
  type     = "MX"
  ttl      = 1
  proxied  = false
  priority = 47
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

resource "cloudflare_email_routing_rule" "nicolasspehler_nicolas" {
  zone_id = cloudflare_zone.nicolasspehler.id
  name    = "nicolas@nicolasspehler.com"
  enabled = true
  matchers = [{
    type  = "literal"
    field = "to"
    value = "nicolas@nicolasspehler.com"
  }]
  actions = [{
    type  = "forward"
    value = [cloudflare_email_routing_address.nicolas.email]
  }]
}

resource "cloudflare_email_routing_catch_all" "nicolasspehler" {
  zone_id  = cloudflare_zone.nicolasspehler.id
  name     = "Catch-all"
  enabled  = true
  matchers = [{ type = "all" }]
  actions = [{
    type  = "forward"
    value = [cloudflare_email_routing_address.nicolas.email]
  }]
}

resource "cloudflare_dns_record" "nicolasspehler_email_spf" {
  zone_id = cloudflare_zone.nicolasspehler.id
  name    = "nicolasspehler.com"
  content = "v=spf1 include:_spf.mx.cloudflare.net ~all"
  type    = "TXT"
  ttl     = 1
  proxied = false
}

resource "cloudflare_dns_record" "nicolasspehler_email_dkim" {
  zone_id = cloudflare_zone.nicolasspehler.id
  name    = "cf2024-1._domainkey.nicolasspehler.com"
  content = local.cloudflare_email_dkim
  type    = "TXT"
  ttl     = 1
  proxied = false
}

# Redirects
resource "cloudflare_dns_record" "endless_engineer_apex" {
  zone_id = cloudflare_zone.endless_engineer.id
  name    = "endless.engineer"
  content = "192.0.2.0"
  type    = "A"
  ttl     = 1
  proxied = true
}

resource "cloudflare_dns_record" "leanmarketingforstartups_apex" {
  zone_id = cloudflare_zone.leanmarketingforstartups.id
  name    = "leanmarketingforstartups.com"
  content = "192.0.2.1"
  type    = "A"
  ttl     = 1
  proxied = true
}

resource "cloudflare_dns_record" "leanmarketingforstartups_www" {
  zone_id = cloudflare_zone.leanmarketingforstartups.id
  name    = "www.leanmarketingforstartups.com"
  content = "leanmarketingforstartups.com"
  type    = "CNAME"
  ttl     = 1
  proxied = true
}

resource "cloudflare_dns_record" "nicolasspehler_apex" {
  zone_id = cloudflare_zone.nicolasspehler.id
  name    = "nicolasspehler.com"
  content = "192.0.2.1"
  type    = "A"
  ttl     = 1
  proxied = true
}

resource "cloudflare_dns_record" "nicolasspehler_www" {
  zone_id = cloudflare_zone.nicolasspehler.id
  name    = "www.nicolasspehler.com"
  content = "nicolasspehler.com"
  type    = "CNAME"
  ttl     = 1
  proxied = true
}

resource "cloudflare_page_rule" "endless_engineer_redirect" {
  zone_id  = cloudflare_zone.endless_engineer.id
  target   = "endless.engineer/*"
  priority = 1
  status   = "active"
  actions = {
    forwarding_url = {
      url         = "https://nspehler.com"
      status_code = 302
    }
  }
}

resource "cloudflare_page_rule" "endless_engineer_redirect_subdomains" {
  zone_id  = cloudflare_zone.endless_engineer.id
  target   = "*.endless.engineer/*"
  priority = 2
  status   = "active"
  actions = {
    forwarding_url = {
      url         = "https://nspehler.com"
      status_code = 302
    }
  }
}

resource "cloudflare_page_rule" "leanmarketingforstartups_redirect" {
  zone_id  = cloudflare_zone.leanmarketingforstartups.id
  target   = "leanmarketingforstartups.com/*"
  priority = 1
  status   = "active"
  actions = {
    forwarding_url = {
      url         = "https://nspehler.com/lean-marketing-for-startups"
      status_code = 301
    }
  }
}

resource "cloudflare_page_rule" "leanmarketingforstartups_redirect_subdomains" {
  zone_id  = cloudflare_zone.leanmarketingforstartups.id
  target   = "*.leanmarketingforstartups.com/*"
  priority = 2
  status   = "active"
  actions = {
    forwarding_url = {
      url         = "https://nspehler.com/lean-marketing-for-startups"
      status_code = 301
    }
  }
}

resource "cloudflare_page_rule" "nicolasspehler_redirect" {
  zone_id  = cloudflare_zone.nicolasspehler.id
  target   = "nicolasspehler.com/*"
  priority = 2
  status   = "active"
  actions = {
    forwarding_url = {
      url         = "https://nspehler.com"
      status_code = 301
    }
  }
}

resource "cloudflare_page_rule" "nicolasspehler_redirect_subdomains" {
  zone_id  = cloudflare_zone.nicolasspehler.id
  target   = "*.nicolasspehler.com/*"
  priority = 1
  status   = "active"
  actions = {
    forwarding_url = {
      url         = "https://nspehler.com"
      status_code = 301
    }
  }
}

# Google Search Console
resource "cloudflare_dns_record" "leanmarketingforstartups_google_search_console" {
  zone_id = cloudflare_zone.leanmarketingforstartups.id
  name    = "leanmarketingforstartups.com"
  content = "google-site-verification=9f5V5xCWZ7rOZrcEpfTEWnRlym3Eq2gEfQdysFq9dMs"
  type    = "TXT"
  ttl     = 1
  proxied = false
}

resource "cloudflare_dns_record" "nicolasspehler_google_search_console" {
  zone_id = cloudflare_zone.nicolasspehler.id
  name    = "nicolasspehler.com"
  content = "google-site-verification=M1gQInE7vkBdbhEL-PgBXXXx_y6PMcEJPJ0GbrFdquA"
  type    = "TXT"
  ttl     = 1
  proxied = false
}

import {
  to = cloudflare_page_rule.endless_engineer_redirect
  id = "1c280fd8b5e404575a2e83d9e522811a/02107afca88a3a4bfd081b2485330d9d"
}

import {
  to = cloudflare_page_rule.endless_engineer_redirect_subdomains
  id = "1c280fd8b5e404575a2e83d9e522811a/c864ce9e474c2fbaaaf862611bc67e83"
}

import {
  to = cloudflare_page_rule.leanmarketingforstartups_redirect
  id = "0dd210718e6bec1373f9eb35a934a310/6141967b55f587ac88b8387a717607dc"
}

import {
  to = cloudflare_page_rule.leanmarketingforstartups_redirect_subdomains
  id = "0dd210718e6bec1373f9eb35a934a310/07e403fe3427747c72c83cb56afe7eb9"
}

import {
  to = cloudflare_page_rule.nicolasspehler_redirect
  id = "cdd84d7a0ad8da5ae170f11d96d184db/05f2fd25729a8174c7458dc996c3de37"
}

import {
  to = cloudflare_page_rule.nicolasspehler_redirect_subdomains
  id = "cdd84d7a0ad8da5ae170f11d96d184db/f4a87cd1954b131188817c3fc2dda5bf"
}
