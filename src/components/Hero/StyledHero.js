import styled from "styled-components"

export const StyledContainer = styled.article`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 3%;
  @media (max-width: 1200px) {
    flex-direction: column;
  }

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

    @media (min-width: 992px) {
      flex: 1;
    }
  }
`

export const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  @media (min-width: 1200px) {
    justify-content: space-between;
    flex: 1;
  }

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
    font-size: 0.9rem;

    @media (min-width: 992px) {
      font-size: 1.3rem;
    }
  }

  .hero-button {
    margin-top: 1.8rem;
    font-size: 0.8rem;
    @media (min-width: 768px) {
      font-size: 1rem;
    }
    @media (min-width: 1200px) {
      margin-top: 1.6rem;
    }
  }
`
