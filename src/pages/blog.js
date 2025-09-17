import * as React from "react"
import { graphql, Link } from "gatsby"

const BlogPage = ({ data }) => {
  return (
    <main>
      <h1>My Blog</h1>
      <ul>
        {data.allMdx.nodes.map(post => (
          <li key={post.id}>
            <Link to={`/blog/${post.frontmatter.slug}`}>
              {post.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

export const query = graphql`
  query {
    allMdx {
      nodes {
        id
        frontmatter {
          title
          slug
        }
      }
    }
  }
`

export default BlogPage
