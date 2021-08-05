import styled from "styled-components"

export const StyledProductsDetails = styled.section`
  .text {
    display: flex;
  }
  p {
    line-height: 1.8rem;
    margin: 2rem 0;
    color: ${({ theme }) => theme.colors.textGrey};
  }

  @media (min-width: 768px) {
    .gallery {
      display: flex;
    }
  }
`
