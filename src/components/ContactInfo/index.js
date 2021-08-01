import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { faEnvelopeOpen, faMobileAlt } from "@fortawesome/free-solid-svg-icons"

const StyledInfo = styled.article`
  text-align: center;
  color: ${({ theme }) => theme.colors.black};

  h3 {
    letter-spacing: 1px;
    font-weight: 400;
    width: 90%;
  }

  p,
  strong {
    letter-spacing: 0.6px;
    font-weight: 400;
  }
`

const StyledCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`

const StyledIcons = styled.div`
  display: flex;
  align-items: space-between;
  min-width: 70%;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  padding: 1rem;

  @media (min-width: 992px) {
    min-width: 60%;
  }
`

const StyledIcon = styled.div`
  width: 3rem;
  height: 3rem;
  color: ${({ theme }) => theme.colors.darkGrey};
  margin-right: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  display: grid;
  place-items: center;
`

const ContactInfo = () => {
  return (
    <StyledInfo>
      <h3>
        Skontaktuj się z nami wypełniając formularz kontaktowy lub zadzwoń
      </h3>
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
