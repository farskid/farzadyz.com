module.exports = {
  siteMetadata: {
    title: `Farzad YZ personal website`,
    author: `Farzad YZ`,
    description: `I'm a Software Engineer living in Finland. I'm interested in Javascript,Typescript,React,React Native,Nodejs,Restful services,Serverless,Redux,GraphQL,ReasonML and,Golang. I'm usually fascinated by Abstract Tooling, State management patterns, Automation and, Architectural patterns.`,
    siteUrl: process.env.SITE_URL || "http://localhost:8000",
    social: {
      twitterHandle: "@farzad_yz",
      twitter: `https://twitter.com/farzad_yz`,
      github: `https://github.com/farskid`,
      linkedin: `https://www.linkedin.com/in/farzadyz`,
      medium: `https://medium.com/@farzad_yz`,
      stackoverflow: `https://stackoverflow.com/users/2784512/farzad-yz`
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.ANALYTICS_TRACK_ID
      }
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Farzad YZ personal website`,
        short_name: `FarzadYZ`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/icon.jpg`
      }
    },
    {
      resolve: `gatsby-plugin-offline`
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    }
  ]
};
