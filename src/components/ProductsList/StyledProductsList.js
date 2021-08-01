import styled from "styled-components"
import { Link } from "gatsby"

export const StyledProducts = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`
export const StyledCategory = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 50%;
  text-align: center;
  padding: 1.5rem;
  transition: all 0.2s linear;
  color: ${({ theme }) => theme.colors.lightGrey};
  letter-spacing: 5px;
  text-transform: uppercase;
  font-size: 0.9rem;
  background-color: ${({ theme }) => theme.colors.greenGrey};

  @media (max-width: 992px) {
    font-size: 0.8rem;
    min-width: 60%;
  }
`

export const StyledLink = styled(Link)`
  overflow: hidden;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadows.shadow1};
  width: 100%;

  @media (min-width: 768px) {
    width: 49%;
  }
  @media (min-width: 1100px) {
    width: 32%;
  }
`

export const StyledThumbnail = styled.div`
  position: relative;
  height: 400px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  transition: 0.4s ease-in-out;

  &:hover {
    .thumb {
      transform: scale(1.1);
      opacity: 0.6;
    }
    .thumb-category {
      background-color: black;
    }
  }
`
