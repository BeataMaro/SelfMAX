import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  background-color: ${({ theme }) => theme.colors.black};
  padding: 1.5rem;
  z-index: 5000;

  @media (max-width: 992px) {
    padding: 2rem 1rem;
  }

  & p {
    color: ${({ theme }) => theme.colors.lightGrey};
    line-height: 1;
    font-size: 0.7rem;
    text-align: right;

    &.copyright {
      text-align: left;
      line-height: 1rem;
      .cookies {
        text-align: left;
      }
    }
  }

  & a {
    color: ${({ theme }) => theme.colors.main};
  }
`

export const Footer = () => {
  return (
    <StyledFooter>
      <p className="copyright">
        <span>&copy; 2021 SelfMAX. Wszelkie prawa zastrzeżone.</span>
        <p class="cookies">
          <Link to="/terms">Polityka prywatności.</Link>
        </p>
      </p>
      <p>
        Powered by&nbsp;
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
