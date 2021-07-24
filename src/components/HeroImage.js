import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import styled from "styled-components"

const StyledText = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-weight: 400;

  h1 {
    text-align: center;
    letter-spacing: 3px;
  }

  strong {
    font-weight: 400;
  }
`

const HeroImage = () => {
  const { heroBgImage } = useStaticQuery(query)
  const pluginImage = getImage(heroBgImage)

  return (
    <>
      <BgImage image={pluginImage} className="hero" preserveStackingContext />
      <StyledText>
        <h1>Witaj na stronie SelfMAX!</h1>
        <p>
          Znajdziesz tutaj zakres naszej oferty oraz przykładowe realizacje.
          Specjalizujemy się w zadaszeniach z aluminium i jest to jedyny
          materiał, który stosujemy do budowy konstrukcji.
        </p>
        <p>
          Kierujemy się zasadą estetyki i trwałości, co szczególnie cenią sobie
          klienci, podejmujący z nami współpracę.
        </p>
        <p>
          {" "}
          Udzielamy <strong>10-letniej gwarancji</strong> na elementy
          konstrukcyjne oraz <strong>5-letniej gwarancji</strong> na elementy
          elektroniczne/ automatykę.
        </p>
        <p>
          Nie konkurujemy cenami, dlatego jeśli szukasz najtańszego produktu to
          tutaj go nie znajdziesz. Po prostu, na jakości nie da się zaoszczędzić
          – przekonasz się o tym z biegiem lat, obserwując swój dach pod naporem
          śniegu, lub targany porywistym wiatrem.
        </p>
        <p>
          {" "}
          Usługi wykonujemy kompleksowo, przygotowujemy podłoże, montujemy
          zadaszenie zgodnie z ustaleniami i doprowadzamy taras do stanu sprzed
          montażu.
        </p>
        <p>
          Jesteśmy otwarci na niestandardowe potrzeby klienta, jak również
          możemy dostarczyć materiały do samodzielnego montażu zadaszenia wraz z
          instruktażem.
        </p>
      </StyledText>
    </>
  )
}

export default HeroImage

export const query = graphql`
  {
    heroBgImage: file(
      relativePath: { eq: "hero/jonas-jaeken-yellow-car-unsplash.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, width: 2000)
      }
    }
  }
`
