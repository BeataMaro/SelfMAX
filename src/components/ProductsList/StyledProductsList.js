import styled from "styled-components"

export const StyledProducts = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  overflow: hidden;

  @media (min-width: 768px) {
    justify-content: space-around;
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
  transition: all 0.2s linear;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.lightGrey};
  letter-spacing: 5px;
  text-transform: uppercase;
  background-color: rgba(90, 90, 90, 0.9);
  border-radius: 2px;
  white-space: nowrap;
  transform-origin: center;

  &:hover {
    background-color: black;
  }
`

export const StyledThumbnailContainer = styled.div`
  overflow: hidden;
  border-radius: 5px;
`

export const StyledThumbnail = styled.div`
  position: relative;
  width: 90vw;
  height: 400px;
  max-height: 500px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  transition: 0.4s ease-in-out;

  &:hover {
    .thumb {
      transform: scale(1.1);
      opacity: 0.6;
    }
  }
  @media (min-width: 768px) {
    width: 50vw;
  }
  @media (min-width: 992px) {
    width: 28vw;
  }
`
