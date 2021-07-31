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
  background-color: rgba(red, 0.9);
  padding: 1rem;
  transition: all 0.2s linear;
  cursor: pointer;
  color: white;
  letter-spacing: 10px;
  text-align: center;
`

export const StyledThumbnailContainer = styled.div`
  overflow: hidden;
`

export const StyledThumbnail = styled.div`
  position: relative;
  width: 90vw;
  height: 500px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  transition: 0.2s ease-in;

  &:hover {
    transform: scale(1.1);
  }
  @media (min-width: 768px) {
    width: 50vw;
  }
  @media (min-width: 992px) {
    width: 28vw;
  }
`
