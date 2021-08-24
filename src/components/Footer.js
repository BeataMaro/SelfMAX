import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  background-color: ${({ theme }) => theme.colors.black};
  padding: 1.5rem;
  font-size: 0.7rem;
  z-index: 5000;

  @media (max-width: 992px) {
    padding: 1rem;
  }

  a {
    color: ${({ theme }) => theme.colors.main};
  }

  p {
    color: ${({ theme }) => theme.colors.lightGrey};
  }

  & div {
    line-height: 1;
    text-align: left;

    &.copyright {
      line-height: 1rem;
    }
  }
`

export const Footer = () => {
  return (
    <StyledFooter>
      <div className="copyright">
        <p>&copy; 2021 SelfMAX. Wszelkie prawa zastrzeżone.</p>
      </div>
      <p>
        Powered by&nbsp;
        <a href="https://beatamaro.github.io/" target="_blank" rel="noreferrer">
          Beta
        </a>
      </p>
    </StyledFooter>
  )
}

export default Footer
