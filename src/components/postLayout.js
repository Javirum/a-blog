import React, { Component } from 'react';
import Layout from "../components/layout";
import {graphql} from "gatsby";

class postLayout extends Component {
  render() {
    return (
      <Layout>
        <div>
          <h2>Blog Post Layout</h2>
        </div>
      </Layout>
    );
  }
}

export const query = graphql`
  query PostQuery {
    markdownRemark(frontmatter: {
      slug: {
        eq: "/third-post"
      }
    }) {
      html {
        frontmatter {
          slug
          title
          date
        }
      }
    }
  }
`

export default postLayout;