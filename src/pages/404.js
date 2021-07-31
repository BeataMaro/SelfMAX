import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const StyledError = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin-left: auto;

  @media (max-width: 992px) {
    flex-direction: column;
    margin: auto;
    img {
      width: 100%;
    }
  }

  img {
    max-width: 100%;
  }
`

const StyledInfo = styled.div`
  padding: 5rem;
  border-bottom: 0.8px solid ${({ theme }) => theme.colors.lightGrey};

  h2 {
    margin-bottom: 1rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.black};
    font-weight: 700;
  }
  p {
    font-weight: 500;
    margin-bottom: 2rem;
  }
`

const StyledLink = styled(Link)`
  color: orangered;
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.colors.main};
  }
`

const Error404Page = () => {
  return (
    <StyledError>
      <StyledInfo>
        <h2>Przepraszamy,</h2>
        <p>strona o podanym adresie nie istnieje.</p>
        <StyledLink to="/">Wróć na stronę główną</StyledLink>
      </StyledInfo>
      <StaticImage
        src="../assets/hero/hero.png"
        alt="Dom z zadaszeniem z poliwęglanu"
      />
    </StyledError>
  )
}

export default Error404Page
