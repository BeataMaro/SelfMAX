import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { faEnvelopeOpen, faMobileAlt } from "@fortawesome/free-solid-svg-icons"

const StyledInfo = styled.div`
  text-align: center;
  height: 50%;
  color: ${({ theme }) => theme.colors.darkGrey};

  p {
    a {
      color: ${({ theme }) => theme.colors.darkGrey};
      display: block;
    }
  }

  svg {
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: 1rem;
  }

  strong {
    font-weight: 400;
  }
`

const StyledIcon = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  margin: auto;
  border-radius: 50%;
  display: grid;
  place-items: center;
`

const ContactInfo = () => {
  return (
    <article>
      <StyledInfo>
        <h3>
          Skontaktuj się z nami wypełniając formularz kontaktowy lub zadzwoń
        </h3>
        <StyledIcon>
          <FontAwesomeIcon icon={faMobileAlt} />
        </StyledIcon>
        <p>+48 503 696 926</p>
        <div>
          <StyledIcon>
            <FontAwesomeIcon icon={faEnvelopeOpen} />
          </StyledIcon>
          <strong>dariusz@lakomski.pl</strong>
        </div>
        <div>
          <a
            href="https://www.facebook.com/SelfmaxPolska"
            target="_blank"
            rel="noreferrer"
          >
            <StyledIcon>
              <FontAwesomeIcon icon={faFacebookF} />
            </StyledIcon>
          </a>
          <a
            href="https://www.facebook.com/SelfmaxPolska"
            target="_blank"
            rel="noreferrer"
          >
            <strong>@SelfmaxPolska</strong>
          </a>
        </div>
      </StyledInfo>
    </article>
  )
}

export default ContactInfo
