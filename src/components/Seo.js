/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"

function Seo({ description, lang, meta, title }) {
  const { site, file } = useStaticQuery(
    graphql`
      query {
        file(relativeDirectory: { eq: "about" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        site {
          siteMetadata {
            title
            description
            author
            image
          }
        }
      }
    `
  )

  const image = getImage(file.childImageSharp)
  // console.log(image.images.fallback.src)
  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: image.images.fallback.src,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `facebook:card`,
          content: `summary`,
        },
        {
          name: `facebook:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `facebook:title`,
          content: title,
        },
        {
          name: `facebook:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `pl`,
  meta: [],
  description: `Zadaszenia tarasowe, carporty, pergole, ogrody zimowe. Szybka realizacja, 10-letnia gwarancja, trwałość i estetyka.`,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
