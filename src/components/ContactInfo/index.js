import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { faEnvelopeOpen, faMobileAlt } from "@fortawesome/free-solid-svg-icons"
import {
  StyledInfo,
  StyledIcons,
  StyledIcon,
  StyledCol,
} from "./StyledContactInfo"

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
