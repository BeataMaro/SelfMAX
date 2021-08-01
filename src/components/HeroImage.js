import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import styled from "styled-components"

const StyledHero = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(55, 55, 55, 0.4);
  }
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
    heroBgImage: file(relativePath: { eq: "hero/hero-flip.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`
