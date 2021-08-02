import React from "react"
import styled from "styled-components"

const StyledText = styled.section`
  h1 {
    color: ${({ theme }) => theme.colors.darkGrey};
    letter-spacing: 2px;
    font-weight: 600;
    text-align: center;
    width: 100%;

    @media (min-width: 992px) {
      margin: 2rem 0;
    }

    strong {
      display: block;
      font-weight: inherit;

      &::before {
        content: "⇝";
        margin-right: 1rem;
      }
      &::after {
        content: "⇜";
        margin-left: 1rem;
      }
    }
  }

  p {
    font-weight: 400;
    letter-spacing: 1px;
    padding: 0.7rem;
    color: ${({ theme }) => theme.colors.grey};
  }
`

const HeroText = () => {
  return (
    <StyledText>
      <h1>
        Witaj na stronie <strong>SelfMAX!</strong>
      </h1>
      <div>
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
          śniegu lub targany porywistym wiatrem.
        </p>
        <p>
          Usługi wykonujemy kompleksowo, przygotowujemy podłoże, montujemy
          zadaszenie zgodnie z ustaleniami i doprowadzamy taras do stanu sprzed
          montażu.
        </p>
        <p>
          Jesteśmy otwarci na niestandardowe potrzeby klienta, jak również
          możemy dostarczyć materiały do samodzielnego montażu zadaszenia wraz z
          instruktażem.
        </p>
      </div>
    </StyledText>
  )
}

export default HeroText
