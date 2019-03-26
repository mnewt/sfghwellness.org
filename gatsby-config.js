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
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages`,
        name: `pages`,
      },
    },
    `gatsby-transformer-yaml`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
              wrapperStyle: `width: 100%;`,
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
        short_name: `ZSFGH Wellness`,
        start_url: `/`,
        background_color: `#fcfcfc`,
        theme_color: `#663399`,
        display: `minimal-ui`,
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
        logo: `./src/images/cropped-cropped-ZSFGfavicon-270x270.png`,
      },
    },
  ],
};