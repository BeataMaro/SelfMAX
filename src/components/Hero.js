import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const StyledHero = styled.div`
  width: 75%;
  margin-top: -12vh;
  margin-left: auto;

  @media (max-width: 992px) {
    width: 100%;
  }
`

const StyledTitle = styled.h1`
  position: absolute;
  top: 30%;
  left: 20%;
  text-align: center;
  width: 20%;
  background-color: ${({ theme }) => theme.colors.main};
  /* font-family: ${({ theme }) => theme.fonts.dodum}; */
  font-weight: 400;
  text-shadow: ${({ theme }) => theme.shadows.shadow2};
  color: white;
  padding: 1rem;

  @media (max-width: 992px) {
    width: 50%;
    top: 50%;
    left: 10%;
  }
  @media (max-width: 768px) {
    width: 70%;
    top: 30%;
  }
`

const Hero = () => {
  return (
    <>
      <StyledHero>
        <StaticImage
          src="../assets/hero/hero.png"
          alt=""
          placeholder="blurred"
          className="hero-image"
        />
        <StyledTitle>Witaj na stronie SelfMAX!</StyledTitle>
      </StyledHero>
    </>
  )
}

export default Hero
