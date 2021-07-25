import React, { useEffect, useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import styled from "styled-components"

import { animationMoveY } from "../styles/Animations"

const StyledTitle = styled.div`
  width: 35%;
  position: absolute;
  top: 55%;
  left: 7rem;
  /* transform: translate(-20%, -55%); */
  background-color: goldenrod;
  color: white;
  padding: 2rem;

  @media (max-width: 992px) {
    width: 60%;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -100%);
    padding: 1rem;
  }

  @media (max-width: 576px) {
    width: 75%;
  }

  h1 {
    margin: 0 2.5rem;
    text-align: center;
    letter-spacing: 3px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.white};
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.9);

    @media (max-width: 768px) {
      font-size: 1.7rem;
      margin: 1rem;
    }
  }
`

const HeroImage = () => {
  const { heroBgImage } = useStaticQuery(query)
  const pluginImage = getImage(heroBgImage)

  const titleRef = useRef(null)
  useEffect(() => {
    animationMoveY(titleRef.current, true)
  }, [])

  return (
    <>
      <BgImage image={pluginImage} className="hero" preserveStackingContext>
        <StyledTitle ref={titleRef}>
          <h1>Witaj na stronie SELFMAX!</h1>
        </StyledTitle>
      </BgImage>
    </>
  )
}

export default HeroImage

export const query = graphql`
  {
    heroBgImage: file(relativePath: { eq: "hero/hero.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, width: 4000)
      }
    }
  }
`
