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
  width: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 1.5rem;
  transition: all 0.2s linear;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 3px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.9);
`

export const StyledThumbnailContainer = styled.div`
  overflow: hidden;
  border-radius: 5px;
`

export const StyledThumbnail = styled.div`
  position: relative;
  width: 90vw;
  height: 500px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  transition: 0.4s ease-in-out;

  button {
    opacity: 0;
    transition: 0.2s ease;
  }

  &:hover {
    button {
      opacity: 1;
    }
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
