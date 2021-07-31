import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"

import { StyledContactBar, StyledIcons } from "./StyledContactCorner.js"

const ContactCorner = () => {
  return (
    <StyledContactBar>
      <StyledIcons>
        <Link to="/contact">
          <p className="phone">+48 503 696 926</p>
        </Link>
        <a
          href="https://www.facebook.com/SelfmaxPolska"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faFacebookF} className="facebook" />
        </a>
      </StyledIcons>
    </StyledContactBar>
  )
}

export default ContactCorner
