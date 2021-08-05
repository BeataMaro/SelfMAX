import React, { useRef, useEffect } from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

import { Button } from "../../components/atoms/Button"
import { animationMoveX } from "../../styles/Animations"

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
  text-shadow: ${({ theme }) => theme.shadows.shadow2};
  font-size: 5rem;
  margin: 0;
  transition: 0.5s ease-in-out;

  &:hover {
    text-shadow: -4px -4px 0 white;
  }
`

const StyledShape = styled.div`
  width: 10vw;
  height: 10vw;
  background-color: slateblue;
  border-radius: 50%;
  transition: 0.3s ease-in;
  /* background-image: url("https://images.unsplash.com/photo-1567016515344-5e3b0d67bb75?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"); */
  /* background-image: url("hero2.jpg"); */
  /* background-repeat: no-repeat; */
  /* background-size: cover; */
  box-shadow: ${({ theme }) => theme.shadows.shadow3};
  transform-origin: center;

  &:hover {
    transform: scale(1.2);
  }
`

const Hero = () => {
  const heroRef = useRef(null)
  useEffect(() => {
    animationMoveX(heroRef.current, true)
  }, [])

  return (
    <>
      <StyledContainer>
        <StyledHero ref={heroRef}>SelfMax</StyledHero>
        <Link to="/products">
          <Button empty>Dowiedz się wiecej</Button>
        </Link>
        <StyledShape></StyledShape>
      </StyledContainer>
    </>
  )
}

export default Hero
