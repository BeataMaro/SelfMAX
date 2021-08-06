import styled from "styled-components"
import { Link } from "gatsby"

export const StyledProducts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
`
export const StyledLink = styled(Link)`
  overflow: hidden;
  border-radius: 4%;
  box-shadow: ${({ theme }) => theme.shadows.shadow1};
  width: 100%;
  height: 350px;

  @media (min-width: 768px) {
    width: 48%;
  }
  @media (min-width: 992px) {
    width: 32.5%;
  }
`
export const StyledThumbnail = styled.div`
  position: relative;
  height: 400px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  transition: 0.4s ease-in-out;

  &:hover {
    .thumb-category {
      background-color: ${({ theme }) => theme.colors.black};
    }
  }

  @media (min-width: 768px) {
    &:hover {
      .thumb {
        transform: scale(1.1);
        filter: blur(2px);
      }
    }
  }
`
export const StyledCategory = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem 2rem;
  width: 100%;
  text-align: center;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-shadow: ${({ theme }) => theme.shadows.shadow1};
  background-color: ${({ theme }) => theme.colors.textGrey};
  color: ${({ theme }) => theme.colors.lightGrey};
  transition: all 0.2s linear;

  @media (max-width: 992px) {
    font-size: 0.8rem;
  }
`
