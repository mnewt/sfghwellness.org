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

exports.onCreateNode = ({ node, loadNodeContent, actions, getNode }) => {
  const { createNode, createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  } else if (node.internal.type === 'text/html') {
    const nodeContent = loadNodeContent(node);
    // set up the new node
    const htmlNodeContent = {
      // read the raw html content
      content: loadNodeContent(node),
      // take the file's name as identifier
      name: node.name,
      internal: {
        type: 'HTMLContent',
      },
      value: createFilePath({ node, getNode }),
    };

    createNode(htmlNodeContent);
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
