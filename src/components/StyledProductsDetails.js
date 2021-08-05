import styled from "styled-components"

export const StyledProductsDetails = styled.section`
  p {
    line-height: 1.8rem;
    margin: 2rem 0;
    color: ${({ theme }) => theme.colors.textGrey};
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
