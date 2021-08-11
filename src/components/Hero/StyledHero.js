import styled from "styled-components"

export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  .hero-image {
    clip-path: polygon(
      0 0,
      30% 15%,
      70% 15%,
      100% 0%,
      95% 25%,
      100% 65%,
      50% 100%,
      0 65%,
      5% 25%
    );

    max-width: 70vw;
    margin-top: 1rem;

    @media (min-width: 768px) {
      max-width: 65vw;
    }
    @media (min-width: 992px) {
      max-width: 50vw;
    }
  }

  .hero-button {
    @media (max-width: 768px) {
      font-size: 0.5rem;
    }
    @media (max-width: 992px) {
      font-size: 0.8rem;
    }
  }
`

export const StyledHero = styled.article`
  h1 {
    color: ${({ theme }) => theme.colors.main};
    font-size: 4rem;
    font-weight: 500;
    text-align: center;
    margin: 0;
    letter-spacing: 3px;

    @media (max-width: 768px) {
      font-size: 3.5rem;
    }
  }

  h2 {
    color: ${({ theme }) => theme.colors.lightGrey};
    font-weight: 300;
    text-align: center;
    margin-top: 1rem;

    @media (max-width: 992px) {
      font-size: 0.9rem;
      letter-spacing: 1px;
    }
  }
`
