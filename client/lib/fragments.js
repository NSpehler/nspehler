export const metaTagsFragment = `
  fragment metaTagsFragment on Tag {
    attributes
    content
    tag
  }
`

export const siteFragment = `
  fragment siteFragment on Site {
    favicon: faviconMetaTags {
      attributes
      content
      tag
    }
  }
`

export const homeFragment = `
  fragment homeFragment on HomeRecord {
    content {
      value
    }
    seo: _seoMetaTags {
      ...metaTagsFragment
    }
  }
  ${metaTagsFragment}
`

export const contactFragment = `
  fragment contactFragment on ContactRecord {
    title
    slug
    content {
      value
    }
    seo: _seoMetaTags {
      ...metaTagsFragment
    }
  }
  ${metaTagsFragment}
`

export const projectsPageFragment = `
  fragment projectsPageFragment on ProjectsPageRecord {
    title
    slug
    content {
      value
    }
    seo: _seoMetaTags {
      ...metaTagsFragment
    }
  }
  ${metaTagsFragment}
`

export const projectFragment = `
  fragment projectFragment on ProjectRecord {
    title
    content {
      value
    }
    link
    _createdAt
  }
`

export const workPageFragment = `
  fragment workPageFragment on WorkPageRecord {
    title
    slug
    content {
      value
    }
    seo: _seoMetaTags {
      ...metaTagsFragment
    }
  }
  ${metaTagsFragment}
`

export const workFragment = `
  fragment workFragment on WorkRecord {
    title
    content {
      value
    }
    link
    _createdAt
  }
`

export const researchFragment = `
  fragment researchFragment on ResearchRecord {
    title
    slug
    content {
      value
    }
    downloadTitle
    downloadLink {
      url
    }
    seo: _seoMetaTags {
      ...metaTagsFragment
    }
  }
  ${metaTagsFragment}
`

export const headerFragment = `
  fragment headerFragment on HeaderRecord {
    title
    location {
      latitude
      longitude
    }
    links {
      title
      link {
        ... on HomeRecord {
          _modelApiKey
        }
        ... on ProjectsPageRecord {
          _modelApiKey
          slug
        }
        ... on WorkPageRecord {
          _modelApiKey
          slug
        }
        ... on ResearchRecord {
          _modelApiKey
          slug
        }
        ... on ContactRecord {
          _modelApiKey
          slug
        }
      }
    }
  }
`

export const footerFragment = `
  fragment footerFragment on FooterRecord {
    social {
      title
      link
      icon {
        url
      }
    }
  }
`