module.exports = {
  siteMetadata: {
    siteUrl: "https://www.jmialumnivic.com.au",
    title: "JMI Alumni VIC AU Chapter",
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-emotion", 
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Source Sans Pro\:300,400,600,700,900`,
          `Roboto Slab\:400,500,600,700,900`
        ],
        display: 'swap'
      }
    }
  ],
  
};
