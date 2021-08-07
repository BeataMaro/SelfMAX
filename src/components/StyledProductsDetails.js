import styled from "styled-components"

export const StyledProductsDetails = styled.section`
  p {
    line-height: 1.8rem;
    margin: 2rem 0;
    color: ${({ theme }) => theme.colors.textGrey};
  }

  .slider {
    max-width: 600px;
    margin: 4rem auto;
    box-shadow: ${({ theme }) => theme.shadows.shadow1};
    position: relative;

    &::before {
      content: "";
      display: block;
      position: absolute;
      top: -2rem;
      bottom: -2rem;
      left: -2rem;
      right: -2rem;
      background-color: #e3e6ef;
    }
  }

  .gif {
    width: 100%;
    display: flex;
    justify-content: center;
    img {
      max-width: 100%;
      width: 600px;
    }
  }
`
