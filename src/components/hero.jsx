import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const Hero = ({ image, pageTitle, siteTitle }) => {
  const { site, bgImage } = useStaticQuery(
    graphql`
      query HeroQuery {
        site {
          siteMetadata {
            siteUrl
            title
          }
        }
        bgImage: file(relativePath: { eq: "GardenMural_Header-1920x710.jpg" }) {
          childImageSharp {
            fluid(quality: 60, maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  const title = siteTitle || site.siteMetadata.title;
  const subTitle = pageTitle && pageTitle !== title ? pageTitle : '';

  return (
    // <BackgroundImage
    //   tag="section"
    //   className="module__hero background-hero"
    //   fluid={bgImage.childImageSharp.fluid}
    //   style={{}}
    //   /* data-interchange={`[${image}, large]`} */
    //   /* style={{ */
    //   /*   backgroundImage: 'url(' + image + ')', */
    //   /* }} */
    // >
    <section
      className="module__hero"
      style={{ backgroundImage: 'url(' + image + ')' }}
    >
      <div className="module__container row">
        <div className="small-12">
          <h1>
            {title}
            <small>{subTitle}</small>
          </h1>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  image: PropTypes.string,
  pageTitle: PropTypes.string,
  siteTitle: PropTypes.string,
};

Hero.defaultProps = {
  image: '/images/GardenMural_Header-1920x710.jpg',
};

export default Hero;
