import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import styled from "styled-components"

const StyledTitle = styled.div`
  width: 30%;
  position: absolute;
  top: 55%;
  left: 2%;
  background-color: goldenrod;
  color: white;
  padding: 0;

  @media (max-width: 992px) {
    width: 50%;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -100%);
  }

  @media (max-width: 576px) {
    width: 70%;
  }

  h1 {
    text-align: center;
    letter-spacing: 3px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.white};

    @media (max-width: 992px) {
      font-size: 1.7rem;
    }
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
