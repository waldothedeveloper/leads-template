require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.acfix.today",
    title: "AC contractors near you with mind-blowing expertise.",
    description:
      "ACFIX is the effortless way to compare quotes from highly merited HVAC companies near you. We work with the best experts in your area to get the job done right!. Don't settle for anything less than the best. Browse local deals. We work only with licensed and certified HVAC technicians.",
    author: "Originotes LLC",
    keywords: [
      "hvac companies near miami fl",
      "hvac near me",
      "hvac companies near me hiring",
      "best hvac companies near me",
      "hvac contractors",
      "commercial hvac companies near me",
      "hvac near me free estimates",
      "hvac contractors near me",
    ],
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
    "gatsby-plugin-webpack-bundle-analyser-v2",
    "gatsby-plugin-image",
    `gatsby-plugin-preload-fonts`,
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "293554075",
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
