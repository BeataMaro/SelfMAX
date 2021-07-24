import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

const HeroImage = () => {
  const { heroBgImage } = useStaticQuery(query)
  const pluginImage = getImage(heroBgImage)

  return (
    <>
      <BgImage image={pluginImage} className="hero" preserveStackingContext />
    </>
  )
}

export default HeroImage

export const query = graphql`
  {
    heroBgImage: file(relativePath: { eq: "hero/poliweglan-hero.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, width: 2000)
      }
    }
  }
`
