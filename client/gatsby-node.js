require("dotenv").config({
  path: `.env`,
})

const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsProjectsPage {
          nodes {
            slug
          }
        }
        allDatoCmsWorkPage {
          nodes {
            slug
          }
        }
        allDatoCmsResearch {
          nodes {
            slug
          }
        }
        allDatoCmsContact {
          nodes {
            slug
          }
        }
      }
    `).then((result) => {
      result.data.allDatoCmsProjectsPage.nodes.map((item) => {
        createPage({
          path: `${item.slug}`,
          component: path.resolve(`./src/templates/ProjectsPage.jsx`),
          context: {
            slug: item.slug,
          },
        })
      })
      result.data.allDatoCmsWorkPage.nodes.map((item) => {
        createPage({
          path: `${item.slug}`,
          component: path.resolve(`./src/templates/WorkPage.jsx`),
          context: {
            slug: item.slug,
          },
        })
      })
      result.data.allDatoCmsResearch.nodes.map((item) => {
        createPage({
          path: `${item.slug}`,
          component: path.resolve(`./src/templates/Research.jsx`),
          context: {
            slug: item.slug,
          },
        })
      })
      result.data.allDatoCmsContact.nodes.map((item) => {
        createPage({
          path: `${item.slug}`,
          component: path.resolve(`./src/templates/Contact.jsx`),
          context: {
            slug: item.slug,
          },
        })
      })

      resolve()
    })
  })
}
