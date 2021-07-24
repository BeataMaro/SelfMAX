import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import styled from "styled-components"

const StyledTitle = styled.div`
  width: 20%;
  position: absolute;
  top: 50%;
  left: 2%;

  @media (max-width: 768px) {
    top: 100%;
    left: 50%;
    transform: translate(-50%, -100%);
  }

  h1 {
    text-align: center;
    letter-spacing: 3px;
  }
`

const HeroImage = () => {
  const { heroBgImage } = useStaticQuery(query)
  const pluginImage = getImage(heroBgImage)

  return (
    <>
      <BgImage image={pluginImage} className="hero" preserveStackingContext>
        <StyledTitle>
          <h1>Witaj na stronie SelfMAX!</h1>
        </StyledTitle>
      </BgImage>
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
