import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import styled from "styled-components"

const StyledHero = styled.div`
  position: relative;
  background-color: rgba(55, 55, 55, 0.2);
`

const HeroImage = () => {
  const { heroBgImage } = useStaticQuery(query)
  const pluginImage = getImage(heroBgImage)

  return (
    <StyledHero>
      <BgImage
        image={pluginImage}
        preserveStackingContext
        className="hero-image"
      ></BgImage>
    </StyledHero>
  )
}

export default HeroImage

export const query = graphql`
  {
    heroBgImage: file(relativePath: { eq: "hero/hero2.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`
