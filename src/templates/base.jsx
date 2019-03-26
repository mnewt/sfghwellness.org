import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import './base.module.css';

const BaseTemplate = ({ data, location }) => {
  const page = data.markdownRemark;
  const title = page.frontmatter.title || data.site.siteMetadata.siteTitle;
  const { keywords } = data.site.siteMetadata;

  return (
    <Layout location={location} title={title}>
      <SEO title={title} description={page.excerpt} keywords={keywords} />
      <div dangerouslySetInnerHTML={{ __html: page.html }} />
    </Layout>
  );
};

BaseTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default BaseTemplate;

export const pageQuery = graphql`
  query PageBySlugAndPages($slug: String!) {
    site {
      siteMetadata {
        title
        author
        keywords
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        weight
      }
    }
  }
`;
