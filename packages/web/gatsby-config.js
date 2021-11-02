module.exports = {
  siteMetadata: {
    siteUrl: "https://www.jmialumnivic.com.au",
    title: "JMI Alumni VIC AU Chapter",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-Z7N04QN058", // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    "gatsby-plugin-typescript",
    "gatsby-plugin-emotion",
    "gatsby-plugin-react-helmet", 
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Source Sans Pro\:300,400,600,700,900`,
          `Roboto Slab\:400,500,600,700,900`
        ],
        display: 'swap'
      }
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyDCkXsIiv1gRWI1VJ405P8_hblfrz_l8GU",
          authDomain: "jmi-alumni-vic-au-chapter.firebaseapp.com",
          projectId: "jmi-alumni-vic-au-chapter",
          storageBucket: "jmi-alumni-vic-au-chapter.appspot.com",
          messagingSenderId: "184954500444",
          appId: "1:184954500444:web:99ca6777b5b335e3fc7d99",
          measurementId: "G-Z7N04QN058"
        }
      }
    }
  ],
  
};
