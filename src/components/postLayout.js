import React, { Component } from 'react';
import Layout from "../components/layout";
import { graphql } from "gatsby";

class postLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data;
    return (
      <Layout>
        <div>
          <h1>{markdownRemark.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{
            __html: markdownRemark.html
          }} />
        </div>
      </Layout>
    );
  }
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: {
      slug: {
        eq: $slug
      }
    }) {
      html
      frontmatter {
          slug
          title
          date
        }
      }
    }
  `

export default postLayout;