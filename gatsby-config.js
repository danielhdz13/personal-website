module.exports = {
  siteMetadata: {
      title: "Daniel Hernandez",
      siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      {
          resolve: "gatsby-source-filesystem",
          options: {
              name: `blog`,
              path: `${__dirname}/blog`,
          }
      },
      {
        resolve: "gatsby-source-filesystem",
        options: {
            name: `2022-timeline`,
            path: `${__dirname}/timeline/2022-timeline`,
        }
      },
      {
        resolve: "gatsby-source-filesystem",
        options: {
            name: `2021-timeline`,
            path: `${__dirname}/timeline/2021-timeline`,
        }
      },
      "gatsby-plugin-mdx",
  ],
};
