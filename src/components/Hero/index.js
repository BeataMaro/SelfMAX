import React, { useRef, useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

import { Button } from "../../components/atoms/Button"
import { animationMoveY } from "../../styles/Animations"

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 992px) {
  }
`

const StyledHero = styled.article`
  h1 {
    color: transparent;
    -webkit-text-stroke: 1px ${({ theme }) => theme.colors.main};
    text-shadow: ${({ theme }) => theme.shadows.shadow2};
    font-size: 5rem;
    text-align: center;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 4rem;
    }
  }

  h2 {
    color: ${({ theme }) => theme.colors.lightGrey};
    font-weight: 300;
    text-align: center;

    @media (max-width: 992px) {
      font-size: 0.9rem;
      letter-spacing: 1px;
    }
  }
`

const StyledText = styled.div`
  display: grid;
  place-items: center;
`

const Hero = () => {
  const heroRef = useRef(null)
  useEffect(() => {
    animationMoveY(heroRef.current, true)
  }, [])

  return (
    <>
      <StyledContainer>
        <StyledText>
          <StyledHero ref={heroRef}>
            <h1>
              <strong>SelfMAX</strong>
            </h1>
            <h2>Zadaszenia | Ogrody zimowe | Wiaty</h2>
          </StyledHero>
          <Link to="/products">
            <Button empty role="button" className="hero-button">
              Dowiedz się wiecej
            </Button>
          </Link>
        </StyledText>

        <StaticImage
          src="../../assets/hero/hero2.jpg"
          alt=""
          placeholder="blurred"
          className="hero-image"
        ></StaticImage>
      </StyledContainer>
    </>
  )
}

export default Hero
