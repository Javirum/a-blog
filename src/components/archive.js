import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import "./layout.css";
import styled from "styled-components";

const ArchiveList = styled.ul`
padding: 0;
margin: 0;
list-style: none;
a {
    font-family: Helvetica;
    font-size: 0.8rem;
    text-decoration: underline;
    color: #663399;
}
`

const Archive = () => {
  const data = useStaticQuery(graphql`
    query BlogPostArchive {
      allMarkdownRemark(limit: 5, sort: {
        order: DESC,
        fields: [frontmatter___date]
      }) {
        edges {
          node {
            frontmatter {
              title
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <aside style={{ padding: "1rem;" }}>
        <h3>Archive</h3>
        <ArchiveList>
          {data.allMarkdownRemark.edges.map(edge => (
            <li key={edge.node.frontmatter.slug}>
              <Link to={`posts${edge.node.frontmatter.slug}`}>
                {edge.node.frontmatter.title}
              </Link>
            </li>
          ))}
        </ArchiveList>
      </aside>
    </>
  )
}

export default Archive
