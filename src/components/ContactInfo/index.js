import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { faEnvelopeOpen, faMobileAlt } from "@fortawesome/free-solid-svg-icons"

const StyledInfo = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  padding: 2rem;
  position: relative;

  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: "☊";
    font-size: 7rem;
    color: ${({ theme }) => theme.colors.lightGrey};
  }

  h3 {
    letter-spacing: 1px;
    font-weight: 400;
    z-index: 100;
  }
  h4 {
    margin: 2rem auto;
    font-weight: 600;
    letter-spacing: 1px;
    z-index: 1000;
  }

  p,
  strong {
    letter-spacing: 0.6px;
    font-weight: 400;
  }
`

const StyledIcons = styled.div`
  align-self: flex-start;
  display: flex;
  align-items: space-between;
  justify-content: space-evenly;
  margin-right: 1rem;
  min-width: 70%;
  padding: 1rem;

  @media (min-width: 768px) {
    min-width: 60%;
  }
`

const StyledCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`

const StyledIcon = styled.div`
  width: 3rem;
  height: 3rem;
  color: ${({ theme }) => theme.colors.darkGrey};
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 50%;
  display: grid;
  place-items: center;
`

const ContactInfo = () => {
  return (
    <StyledInfo>
      <div>
        <h3>
          Jeśli zainteresowała Cię nasza oferta, wybierz najwygodniejszy dla
          siebie sposób kontaktu.
        </h3>
        <h4>Wypełnij formularz lub zadzwoń.</h4>
      </div>
      <StyledIcons>
        <StyledCol>
          <StyledIcon>
            <FontAwesomeIcon icon={faMobileAlt} />
          </StyledIcon>
          <StyledIcon>
            <FontAwesomeIcon icon={faEnvelopeOpen} />
          </StyledIcon>
          <StyledIcon>
            <a
              href="https://www.facebook.com/SelfmaxPolska"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </StyledIcon>
        </StyledCol>
        <StyledCol>
          <p>+48 503 696 926</p>
          <strong>dariusz@lakomski.pl</strong>

          <a
            href="https://www.facebook.com/SelfmaxPolska"
            target="_blank"
            rel="noreferrer"
          >
            <strong>@SelfmaxPolska</strong>
          </a>
        </StyledCol>
      </StyledIcons>
    </StyledInfo>
  )
}

export default ContactInfo
