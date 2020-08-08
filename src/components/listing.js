import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import SEO from "../components/seo";
import styled from "styled-components";

const Post = styled.article`
  box-shadow: 0px 3px 10px lightgray;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  a {
    color: black;
    text-decoration: none;
  }
  p {
    font-size: 0.8rem;
  }
  h2 {
    margin-bottom: 0;
  }
  .read-more {
    font-family: Helvetica;
    font-size: 0.8rem;
    text-decoration: underline;
    color: #663399;
  }
`

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
        <Post key={node.frontmatter.slug}>
          <Link to={`/posts${node.frontmatter.slug}`}><h2>{node.frontmatter.title}</h2></Link>
          <p>{node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
          <Link className="read-more" to={`/posts${node.frontmatter.slug}`}>Read more</Link>
        </Post>
      ))}
    </div>
  )
}

export default Listing
