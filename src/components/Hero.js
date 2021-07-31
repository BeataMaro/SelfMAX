import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const StyledHero = styled.div`
  position: relative;
  display: flex;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
  }
`

const Hero = () => {
  return (
    <>
      <StyledHero>
        <StaticImage
          src="../assets/hero/hero2.jpg"
          alt=""
          placeholder="blurred"
          className="hero-image"
        />
        <StaticImage
          src="../assets/hero/hero1.jpg"
          alt=""
          placeholder="blurred"
          className="hero-image"
        />
      </StyledHero>
    </>
  )
}

export default Hero
