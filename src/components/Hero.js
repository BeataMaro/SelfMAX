import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const StyledHero = styled.div`
  width: 75%;
  margin-top: -12vh;
  margin-left: auto;
  /* border: 1px solid red; */

  @media (max-width: 992px) {
    width: 100%;
  }
`
const StyledTitle = styled.h1``

const Hero = () => {
  return (
    <>
      <StyledHero>
        <StaticImage
          src="../assets/hero/hero.png"
          alt=""
          placeholder="blurred"
        />
      </StyledHero>
      <StyledTitle />
    </>
  )
}

export default Hero
