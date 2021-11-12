require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.acfix.today",
    title: "leads-template",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        enableTags: true,
      },
    },
    "gatsby-plugin-image",
    `gatsby-plugin-preload-fonts`,
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "280726135",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_KEY,
        concurrency: 5,
        tables: [
          {
            baseId: `appu58oGEV91DsZ2q`,
            tableName: `ACFIX-template`,
          },
          {
            baseId: `appu58oGEV91DsZ2q`,
            tableName: `ACFIX-dev`,
          },
        ],
      },
    },
  ],
};
