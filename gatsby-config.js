// gatsby-config.js

module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    description: `A site built with Gatsby and MDX`,
    author: `@gatsbyjs`,
  },
  plugins: [
    // ✅ Source Markdown files
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown/`,
      },
    },

    // ✅ Source MDX content
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/`,
      },
    },

    // ✅ Source images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },

    // ✅ Markdown transformer (for .md files)
    `gatsby-transformer-remark`,

    // ✅ MDX support
    `gatsby-plugin-mdx`,

    // ✅ Image optimization
    `gatsby-plugin-image`,       // <--- Added this
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    // ✅ SEO support
    `gatsby-plugin-react-helmet`,
  ],
}
