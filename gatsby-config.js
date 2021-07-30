/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}` || `.env`,
})

module.exports = {
  siteMetadata: {
    title: `SelfMAX`,
    description:
      "Zadaszenia tarasowe, carporty, pergole, ogrody zimowe. Szybka realizacja, 10-letnia gwarancja, trwałość i estetyka.",
    copyright: "U+00A9 2021 | Beata Maro",
    contact: "beata.maro@yahoo.com",
    author: "Beata Maro",
    menuLinks: [
      {
        name: `Strona główna`,
        link: `/`,
      },
      {
        name: `Produkty`,
        link: `/products`,
        submenu: [
          {
            name: `Zadaszenia z poliweglanu`,
            link: `/poliweglan`,
          },
          {
            name: `Carporty`,
            link: `/carporty`,
          },
          {
            name: `Dachy rzymskie`,
            link: `/dachyrzymskie`,
          },
          {
            name: `Lamele`,
            link: `/lamele`,
          },
          {
            name: `Ogrody zimowe`,
            link: `/ogrodyzimowe`,
          },
          {
            name: `Zabudowa`,
            link: `/zabudowa`,
          },
        ],
      },
      {
        name: `O nas`,
        link: `/about`,
        submenu: [],
      },

      {
        name: `Kontakt`,
        link: `/contact`,
        submenu: [],
      },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `products`,
        path: `${__dirname}/src/assets/products/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SelfMAX`,
        short_name: `SelfMAX`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: "standalone",
        icon: "src/assets/selfMAX-logo.png", // This path is relative to the root of the site.
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
