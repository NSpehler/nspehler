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

resource "cloudflare_zone_dnssec" "portalmonitor" {
  zone_id = cloudflare_zone.portalmonitor.id
  status  = "active"
}

resource "cloudflare_zone_dnssec" "endless_engineer" {
  zone_id = cloudflare_zone.endless_engineer.id
  status  = "active"
}

resource "cloudflare_zone_dnssec" "categoryapi" {
  zone_id = cloudflare_zone.categoryapi.id
  status  = "active"
}

resource "cloudflare_zone_dnssec" "realestatejobs" {
  zone_id = cloudflare_zone.realestatejobs.id
  status  = "active"
}

resource "cloudflare_zone_dnssec" "leanmarketingforstartups" {
  zone_id = cloudflare_zone.leanmarketingforstartups.id
  status  = "active"
}

resource "cloudflare_zone_dnssec" "nicolasspehler" {
  zone_id = cloudflare_zone.nicolasspehler.id
  status  = "active"
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

resource "cloudflare_dns_record" "nicolasspehler_email_mx_1" {
  zone_id  = cloudflare_zone.nicolasspehler.id
  name     = "nicolasspehler.com"
  content  = "route1.mx.cloudflare.net"
  type     = "MX"
  ttl      = 1
  proxied  = false
  priority = 32
}

resource "cloudflare_dns_record" "nicolasspehler_email_mx_2" {
  zone_id  = cloudflare_zone.nicolasspehler.id
  name     = "nicolasspehler.com"
  content  = "route2.mx.cloudflare.net"
  type     = "MX"
  ttl      = 1
  proxied  = false
  priority = 63
}

resource "cloudflare_dns_record" "nicolasspehler_email_mx_3" {
  zone_id  = cloudflare_zone.nicolasspehler.id
  name     = "nicolasspehler.com"
  content  = "route3.mx.cloudflare.net"
  type     = "MX"
  ttl      = 1
  proxied  = false
  priority = 39
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
  to = cloudflare_zone_dnssec.nspehler
  id = "20ec2030590d760e2ffce41463303521"
}

import {
  to = cloudflare_zone_dnssec.categoryapi
  id = "d88ab701190361b800e0514e40c4e229"
}

import {
  to = cloudflare_zone_dnssec.realestatejobs
  id = "e8be78c2590bf12e15694d9257aaebdc"
}

import {
  to = cloudflare_zone_dnssec.leanmarketingforstartups
  id = "0dd210718e6bec1373f9eb35a934a310"
}

import {
  to = cloudflare_zone_dnssec.nicolasspehler
  id = "cdd84d7a0ad8da5ae170f11d96d184db"
}
