import React from "react"
import styled from "styled-components"

const StyledText = styled.section`
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  margin-top: 2rem;
  padding: 2rem;
  font-weight: 400;

  strong {
    font-weight: 400;
  }
`

const HeroText = () => {
  return (
    <section>
      <StyledText>
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
    </section>
  )
}

export default HeroText