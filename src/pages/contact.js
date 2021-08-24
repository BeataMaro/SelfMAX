import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import ContactInfo from "../components/ContactInfo"
import Map from "../components/Map"
import Seo from "../components/Seo"
import { animationMoveX } from "../styles/Animations"

const StyledContactPage = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    display: grid;
    grid-gap: 2rem;
    place-items: center;
  }
`

const Contact = () => {
  const sectionRef = useRef(null)
  useEffect(() => {
    animationMoveX(sectionRef.current, true)
  }, [])

  return (
    <>
      <Seo title="Kontakt" />
      <section ref={sectionRef}>
        <h2 className="section-title">Kontakt</h2>
        <StyledContactPage>
          <ContactInfo />
          <Map />
        </StyledContactPage>
      </section>
    </>
  )
}

export default Contact
