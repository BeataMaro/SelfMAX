import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import styled from "styled-components"

const StyledText = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  padding: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  h1 {
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    letter-spacing: 3px;
  }
`

const HeroImage = () => {
  const { heroBgImage } = useStaticQuery(query)
  const pluginImage = getImage(heroBgImage)

  return (
    <>
      <BgImage image={pluginImage} className="hero" preserveStackingContext />
      <StyledText>
        <h1>Witaj na stronie SelfMAX!</h1>
      </StyledText>
    </>
  )
}

export default HeroImage

export const query = graphql`
  {
    heroBgImage: file(
      relativePath: { eq: "hero/jonas-jaeken-yellow-car-unsplash.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, width: 2000)
      }
    }
  }
`
