import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons"

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.grey};
  margin-bottom: 2rem;
  svg {
    font-size: 0.5rem;
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
