import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Image from "../components/image"
import SEO from "../components/seo"

const Listing = () => {
  const data = useStaticQuery(graphql`
    query ListingQuery {
      allMarkdownRemark(limit: 10, sort: {
        order: DESC,
        fields: [frontmatter___date]
      }) {
        edges {
          node {
            excerpt
            frontmatter {
              title
              slug
              date
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      <SEO title="Home" />
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <article key={node.frontmatter.slug}>
          <Link to={`/posts${node.frontmatter.slug}`}><h2>{node.frontmatter.title}</h2></Link>
          <p>{node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
          <Link to={`/posts${node.frontmatter.slug}`}>Read more</Link>
        </article>
      ))}
    </div>
  )
}

export default Listing
