import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons"

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  transition: 0.2s ease;
  color: ${({ theme }) => theme.colors.textGrey};
  margin-bottom: 2rem;
  svg {
    font-size: 0.5rem;
    color: ${({ theme }) => theme.colors.main};
  }
  span {
    margin-left: 0.5rem;
  }
`

const BreadCrumbs = () => {
  return (
    <StyledLink to="/products">
      <FontAwesomeIcon icon={faAngleDoubleLeft} />
      <span>Wróć</span>
    </StyledLink>
  )
}

export default BreadCrumbs
