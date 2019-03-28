const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const template = path.resolve('./src/templates/base.jsx');

  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    // Create pages from markdown
    const pages = result.data.allMarkdownRemark.edges;

    pages.forEach(page => {
      const { slug } = page.node.fields;

      createPage({
        path: slug,
        component: template,
        context: {
          slug: slug,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};

exports.onCreateWebpackConfig = ({ actions, stage }) => {
  const { setWebpackConfig } = actions;
  const PRODUCTION = stage !== `develop`;

  if (!PRODUCTION) {
    setWebpackConfig({
      resolve: {
        alias: {
          'react-dom': '@hot-loader/react-dom',
        },
      },
    });
  }
};
