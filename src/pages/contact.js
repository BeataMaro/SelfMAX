import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { FormspreeProvider } from "@formspree/react"

import ContactInfo from "../components/ContactInfo"
import Map from "../components/Map"
import Seo from "../components/Seo"
import ContactForm from "../components/ContactForm"
import { animationMoveX } from "../styles/Animations"

const StyledContactPage = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    display: grid;
    grid-gap: 2rem;
    grid-template-areas:
      "form form contact"
      "form form conact"
      "map map map";
  }

  article {
    //Form
    &:nth-of-type(1) {
      grid-area: form;
    }
    &:nth-of-type(2) {
      grid-area: contact;
    }
    &:nth-of-type(3) {
      grid-area: map;
    }
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
          <article>
            <FormspreeProvider project="1730305811177012389">
              <ContactForm />
            </FormspreeProvider>
          </article>

          <Map />
        </StyledContactPage>
      </section>
    </>
  )
}

export default Contact
