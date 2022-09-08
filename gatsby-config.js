require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Gabinet RPG`,
    siteUrl: `https://gabinet-rpg.com`
  },
  plugins: [
    "gatsby-plugin-styled-components", 
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        "trackingId": "UA-111795169-1"
      }
    }, 
    `gatsby-plugin-mdx`,
    {
      resolve: 'gatsby-source-graphcms',
      options: {
        buildMarkdownNodes: true,
        endpoint: process.env.HYGRAPH_ENDPOINT,
        token: process.env.HYGRAPH_TOKEN,
      },
    },
  "gatsby-plugin-image", 
  "gatsby-plugin-sitemap", 
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, 
  "gatsby-plugin-sharp", 
  "gatsby-transformer-sharp", 
  {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
  },
  {
    resolve: "gatsby-plugin-web-font-loader",
    options: {
      typekit: {
        id: process.env.TYPEKIT_ID,
      },
    }
  }
  ] 
};