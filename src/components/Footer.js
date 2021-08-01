import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  padding: 2rem;
  z-index: 5000;

  @media (max-width: 992px) {
    padding: 2rem 1rem;
  }

  & p {
    color: ${({ theme }) => theme.colors.greenGrey};
    line-height: 1;
    font-size: 0.8rem;
  }
  & a {
    color: ${({ theme }) => theme.colors.main};
  }
`

export const Footer = () => {
  return (
    <StyledFooter>
      <p>&copy; 2021 SelfMAX. Wszelkie prawa zastrzeżone.</p>
      <p>
        Powered by{" "}
        <a
          href="https://beatamaro-portfolio.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Beta
        </a>
      </p>
    </StyledFooter>
  )
}

export default Footer
