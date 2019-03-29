import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import './base.module.css';

const BaseTemplate = ({ data, location }) => {
  const page = data.markdownRemark;
  const { keywords } = data.site.siteMetadata;
  const title = page.frontmatter.title || data.site.siteMetadata.title;
  const { pageEvents, sidebarEvents, images } = page.frontmatter;

  return (
    <Layout
      pageEvents={pageEvents}
      sidebarEvents={sidebarEvents}
      images={images}
      location={location}
      title={title}
    >
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

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(quality: 60, maxWidth: 2000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

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
        title
        weight
        background {
          internal {
            content
            contentDigest
            description
            mediaType
            type
          }
          sourceInstanceName
          absolutePath
          relativePath
          extension
          size
          prettySize
          modifiedTime
          accessTime
          changeTime
          birthTime
          root
          dir
          base
          ext
          name
          relativeDirectory
          publicURL
          childImageSharp {
            id
            fixed {
              base64
              tracedSVG
              aspectRatio
              width
              height
              src
              srcSet
              srcWebp
              srcSetWebp
              originalName
            }
            original {
              width
              height
              src
            }
            resize {
              src
              tracedSVG
              width
              height
              aspectRatio
              originalName
            }
            fluid {
              base64
              tracedSVG
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
              originalImg
              originalName
              presentationWidth
              presentationHeight
            }
          }
        }
        pageEvents {
          title
          description
          sections {
            title
            subsections {
              title
              description
            }
          }
        }
        sidebarEvents {
          title
          description
          sections {
            title
            description
          }
        }
        images {
          relativePath
          childImageSharp {
            id
            fixed {
              base64
              tracedSVG
              aspectRatio
              width
              height
              src
              srcSet
              srcWebp
              srcSetWebp
              originalName
            }
            original {
              width
              height
              src
            }
            resize {
              src
              tracedSVG
              width
              height
              aspectRatio
              originalName
            }
            fluid {
              base64
              tracedSVG
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
              originalImg
              originalName
              presentationWidth
              presentationHeight
            }
          }
        }
      }
    }
  }
`;
