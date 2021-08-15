import React, { useRef, useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { Button } from "../../components/atoms/Button"
import { StyledContainer, StyledHero } from "./StyledHero"
import { animationMoveY } from "../../styles/Animations"

const Hero = () => {
  const heroRef = useRef(null)
  useEffect(() => {
    animationMoveY(heroRef.current, true)
  }, [])

  return (
    <StyledContainer>
      <StyledHero ref={heroRef}>
        <h1>SelfMAX</h1>
        <h2>Zadaszenia&nbsp;|&nbsp;Ogrody zimowe&nbsp;|&nbsp;Carporty</h2>
        <Link to="/products">
          <Button empty role="button" className="hero-button">
            Dowiedz się wiecej
          </Button>
        </Link>
      </StyledHero>

      <StaticImage
        src="../../assets/hero/hero2.jpg"
        alt="Zadaszenie z poliwęglanu"
        placeholder="blurred"
        className="hero-image"
      ></StaticImage>
    </StyledContainer>
  )
}

export default Hero
