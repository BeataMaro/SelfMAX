import React from "react"
// import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { FormspreeProvider } from "@formspree/react"
// import { animationMoveY } from "../styles/Animation"

// import ContactInfo from "../components/ContactInfo"
// import Map from "../components/Map"
import Seo from "../components/Seo"
import ContactForm from "../components/ContactForm"

const StyledContactPage = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);

  article {
    @media (max-width: 768px) {
      grid-column: 1 / -1;
    }

    &:nth-of-type(1) {
      grid-column: 1 / 3;
    }
    &:nth-of-type(2) {
      display: grid;
      place-items: center;
      grid-column: 3 / 5;
    }
    &:nth-of-type(3) {
      grid-column: 1 / -1;
    }
  }
`

const Contact = () => {
  //   const sectionRef = useRef(null)
  //   useEffect(() => {
  //     animationMoveY(sectionRef.current, true)
  //   }, [])

  return (
    <>
      <Seo title="Kontakt" />
      <section>
        <h2 className="section-title">Kontakt</h2>
        <StyledContactPage>
          <article>
            <FormspreeProvider project="1730305811177012389">
              <ContactForm />
            </FormspreeProvider>
          </article>
          <article></article>
          <article></article>
          {/* <ContactInfo /> */}
          {/* <Map /> */}
        </StyledContactPage>
      </section>
    </>
  )
}

export default Contact
