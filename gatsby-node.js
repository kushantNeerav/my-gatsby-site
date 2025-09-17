/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  result.data.allMdx.nodes.forEach(node => {
    createPage({
      path: `/posts/${node.frontmatter.slug}`,
      component: require.resolve(`./src/templates/mdx-post.js`),
      context: { id: node.id },
    })
  })
}
