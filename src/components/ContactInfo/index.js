import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { faEnvelopeOpen, faMobileAlt } from "@fortawesome/free-solid-svg-icons"
import {
  StyledInfo,
  StyledIcons,
  StyledIcon,
  StyledCol,
  StyledAddress,
} from "./StyledContactInfo"

const ContactInfo = () => {
  return (
    <StyledInfo>
      <div>
        <h3>
          Jeśli zainteresowała Cię nasza oferta, wybierz najwygodniejszy dla
          siebie sposób kontaktu.
        </h3>
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
      <StyledAddress>
        <p>Niedersulzer Straße 2,</p>
        <p> 2225 Loidesthal, Austria</p>
      </StyledAddress>
    </StyledInfo>
  )
}

export default ContactInfo
