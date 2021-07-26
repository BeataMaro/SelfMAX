import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  background-color: transparent;
  color: lightgray;
  padding: 1rem;

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
        <a
          href="https:www.unsplash.com"
          rel="noreferrer"
          title="Unsplash"
          target="_blank"
        >
          www.unsplash.com
        </a>
      </p>
      <p>Powered by Beta</p>
    </StyledFooter>
  )
}

export default Footer
