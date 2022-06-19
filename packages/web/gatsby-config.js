require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.jmialumnivic.com.au',
    title: 'JMI Alumni VIC AU Chapter',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.JMI_MEASUREMENT_ID, // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-emotion',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Source Sans Pro\:300,400,600,700,900`,
          `Roboto Slab\:400,500,600,700,900`,
        ],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-firebase',
      options: {
        credentials: {
          apiKey: process.env.JMI_API_KEY,
          authDomain: process.env.JMI_AUTH_DOMAIN,
          projectId: process.env.JMI_PROJECT_ID,
          storageBucket: process.env.JMI_STORAGE_BUCKET,
          messagingSenderId: process.env.JMI_MESSAGING_SENDER_ID,
          appId: process.env.JMI_APP_ID,
          measurementId: process.env.JMI_MEASUREMENT_ID,
        },
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.JMI_CONTENTFUL_SPACE_ID,
        accessToken: process.env.JMI_CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
};
