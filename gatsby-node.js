const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const createPagesFromMarkdown = async () => {
    const { data } = await graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `);

    const markdownPages = data.allMarkdownRemark.edges;
    markdownPages.forEach(({ node }) => {
      createPage({
        path: `/posts${node.frontmatter.slug}`,
        component: path.resolve("./src/components/postLayout.js"),
        context: {
          slug: node.frontmatter.slug
        }
      });
    });
  };

  return createPagesFromMarkdown();
};
