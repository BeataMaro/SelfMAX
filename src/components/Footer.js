import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  background-color: ${({ theme }) => theme.colors.black};
  color: lightgray;
  padding: 1rem;
  z-index: 5000;

  & p {
    color: ${({ theme }) => theme.colors.grey};
    line-height: 1;
  }
  & a {
    color: hsl(90, 80%, 40%);
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
