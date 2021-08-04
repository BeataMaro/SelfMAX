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
  /* text-shadow: 1px 1px 3px rgba(255, 255, 255, 0.2); */
  font-size: 5rem;
  margin: 0;
`

const StyledShape = styled.div`
  width: 50vw;
  height: 50vw;
  background-color: slateblue;
  border-radius: 50%;
  transition: 0.3s ease-in;
  background-image: url("https://images.unsplash.com/photo-1567016515344-5e3b0d67bb75?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80");
  /* background-image: url("/hero/hero1.jpg"); */
  background-repeat: no-repeat;
  background-size: cover;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.shadow3};
  }
`

const Hero = () => {
  return (
    <>
      <StyledContainer>
        <StyledHero>SelfMax</StyledHero>
        <Button empty>Dowiedz się wiecej</Button>
        <StyledShape></StyledShape>
      </StyledContainer>
    </>
  )
}

export default Hero
