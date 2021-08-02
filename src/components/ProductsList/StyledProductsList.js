import styled from "styled-components"
import { Link } from "gatsby"

export const StyledProducts = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
`
export const StyledLink = styled(Link)`
  overflow: hidden;
  border-radius: 5px;
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
    .thumb {
      transform: scale(1.1);
      filter: blur(2px);
    }
    .thumb-category {
      background-color: black;
    }
  }
`

export const StyledCategory = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 50%;
  text-align: center;
  padding: 1.5rem;
  letter-spacing: 5px;
  text-transform: uppercase;
  font-size: 0.9rem;
  background-color: ${({ theme }) => theme.colors.greenGrey};
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  transition: all 0.2s linear;

  @media (max-width: 992px) {
    font-size: 0.8rem;
    min-width: 60%;
  }
`
