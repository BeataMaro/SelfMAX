import React, { useEffect, useRef } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import styled from "styled-components"

// import { animationMoveY } from "../styles/Animations"

const StyledHero = styled.div`
  position: relative;
  display: flex;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(55, 55, 55, 0.4);
  }

  /* &::after {
    content: "⟿";
    display: inline-block;
    color: ${({ theme }) => theme.colors.black};
    position: absolute;
    bottom: -5rem;
    right: 1rem;
    font-size: 2.5rem;
    transform: rotate(90deg);
  } */
`

const HeroImage = () => {
  const { heroBgImage } = useStaticQuery(query)

  const pluginImage = getImage(heroBgImage)

  // const titleRef = useRef(null)
  // useEffect(() => {
  //   animationMoveY(titleRef.current, true)
  // }, [])

  return (
    <StyledHero>
      <BgImage
        image={pluginImage}
        preserveStackingContext
        className="hero-image"
      ></BgImage>
      <div className="scroll"></div>
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
