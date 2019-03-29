const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Community Wellness Program`,
    author: `Matthew Sojourner Newton`,
    description: `To PROVIDE and PROMOTE innovative, culturally and linguistically accessible
wellness programs and services for the SFGH community of staff, patients, their
families, and all San Franciscans.`,
    siteUrl: `https://www.sfghwellness.org/`,
    menu: [
      [`Living Wellness`, `/living-wellness/`],
      [`Get Involved`, `/get-involved/`],
      [`Healthy Food`, `/healthy-food/`],
    ],
    keywords: ['community', 'wellness', 'general', 'zsfgh'],
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `media`,
        path: path.join(__dirname, `static`, `media`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `pages`,
      },
    },
    `gatsby-transformer-yaml`,
    `gatsby-plugin-netlify-cms-paths`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-plugin-netlify-cms-paths`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
              withWebp: true,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Community Wellness Program`,
        short_name: `Wellness`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4B3563`,
        display: `minimal-ui`,
        icon: `./static/media/cropped-cropped-ZSFGfavicon-270x270.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-fathom`,
      options: {
        trackingUrl: `logs.knosis.org`,
        siteId: ``,
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: `./static/media/cropped-cropped-ZSFGfavicon-270x270.png`,
      },
    },
    `gatsby-plugin-netlify-cms`,
  ],
};
