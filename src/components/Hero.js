import React from "react"
// import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

import { Button } from "../components/atoms/Button"

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  display: grid;
  place-items: center;
`

const StyledHero = styled.h1`
  color: transparent;
  -webkit-text-stroke: 1px ${({ theme }) => theme.colors.white};
  font-size: 5rem;
  margin: 0;
`

const Hero = () => {
  return (
    <>
      <StyledContainer>
        <StyledHero>SelfMax</StyledHero>
        <Button empty>Sprawdź</Button>
      </StyledContainer>
    </>
  )
}

export default Hero
