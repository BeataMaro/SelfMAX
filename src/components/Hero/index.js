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
    <>
      <StyledContainer>
        <StyledHero ref={heroRef}>
          <h1>
            <strong>SelfMAX</strong>
          </h1>
          <h2>Zadaszenia | Ogrody zimowe | Wiaty</h2>
        </StyledHero>

        <StaticImage
          src="../../assets/hero/hero2.jpg"
          alt="Zadaszenie z poliwęglanu"
          placeholder="blurred"
          className="hero-image"
        ></StaticImage>
        <Link to="/products">
          <Button empty role="button" className="hero-button">
            Dowiedz się wiecej
          </Button>
        </Link>
      </StyledContainer>
    </>
  )
}

export default Hero
