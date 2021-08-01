import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import { animationMoveY } from "../styles/Animations"

const StyledText = styled.article`
  width: 100%;
  margin: auto;
  padding: 2.5rem;
  color: ${({ theme }) => theme.colors.greenGrey};
  background-color: ${({ theme }) => theme.colors.white};
  @media (min-width: 992px) {
    width: 50%;
    padding: 2rem;
  }

  h1 {
    color: ${({ theme }) => theme.colors.black};
    letter-spacing: 1px;
    margin-bottom: 2rem;
    text-align: center;

    strong {
      display: block;
      font-weight: inherit;
      font-family: ${({ theme }) => theme.fonts.dancing};
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
    font-weight: 300;
    line-height: 2rem;
    letter-spacing: 1px;
  }
`

const HeroText = () => {
  const titleRef = useRef(null)

  useEffect(() => {
    animationMoveY(titleRef.current, true)
  }, [])

  return (
    <StyledText>
      <h1 ref={titleRef}>
        Witaj na stronie <strong>SelfMAX!</strong>
      </h1>
      <p>
        Znajdziesz tutaj zakres naszej oferty oraz przykładowe realizacje.
        Specjalizujemy się w&nbsp; zadaszeniach z&nbsp; aluminium i&nbsp; jest
        to jedyny materiał, który stosujemy do budowy konstrukcji.
      </p>
      <p>
        Kierujemy się zasadą estetyki i&nbsp; trwałości, co szczególnie cenią
        sobie klienci, podejmujący z&nbsp; nami współpracę.
      </p>
      <p>
        {" "}
        Udzielamy <strong>10-letniej gwarancji</strong> na elementy
        konstrukcyjne oraz <strong>5-letniej gwarancji</strong> na elementy
        elektroniczne/ automatykę.
      </p>
      <p>
        Nie konkurujemy cenami, dlatego jeśli szukasz najtańszego produktu to
        tutaj go nie znajdziesz. Po prostu, na jakości nie da się zaoszczędzić –
        przekonasz się o&nbsp; tym z&nbsp; biegiem lat, obserwując swój dach pod
        naporem śniegu, lub targany porywistym wiatrem.
      </p>
      <p>
        {" "}
        Usługi wykonujemy kompleksowo, przygotowujemy podłoże, montujemy
        zadaszenie zgodnie z&nbsp; ustaleniami i&nbsp; doprowadzamy taras do
        stanu sprzed montażu.
      </p>
      <p>
        Jesteśmy otwarci na niestandardowe potrzeby klienta, jak również możemy
        dostarczyć materiały do samodzielnego montażu zadaszenia wraz z&nbsp;
        instruktażem.
      </p>
    </StyledText>
  )
}

export default HeroText
