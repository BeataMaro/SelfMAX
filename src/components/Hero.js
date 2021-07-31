import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const StyledHero = styled.div`
  position: relative;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;

  .mobile {
    display: inline-block;
  }

  .desktop {
    display: none;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
  }

  @media (min-width: 992px) {
    .mobile {
      display: none;
    }
    .desktop {
      display: block;
      margin: auto;
    }
  }
`

const Hero = () => {
  return (
    <>
      <StyledHero>
        <StaticImage
          src="../assets/hero/hero2.jpg"
          alt="Zadaszenie z poliwęglanu"
          placeholder="blurred"
          className="hero-image desktop"
        />

        <StaticImage
          src="../assets/hero/hero-flip.jpg"
          alt="Ogród zimowy"
          placeholder="blurred"
          className="hero-image mobile"
        />
      </StyledHero>
    </>
  )
}

export default Hero
