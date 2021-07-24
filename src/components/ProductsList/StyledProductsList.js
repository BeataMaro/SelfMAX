import styled from "styled-components"

export const StyledProducts = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
`

export const StyledCategory = styled.div`
  /* width: 80%; */
  height: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* border: 1px solid ${({ theme }) => theme.colors.lightGrey}; */
  transition: all 0.2s linear;
  cursor: pointer;
  /* overflow: hidden; */

  &:hover {
    box-shadow: 1px 1px 12px rgba(0, 0, 0, 0.1);
  }
`

export const StyledDescription = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 200px;
  display: grid;
  place-items: center;
  width: 80%;
  height: 50%;

  transition: all 0.2s ease-in;
  padding: 2.5rem 0;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  z-index: 20;
`
export const StyledH3 = styled.h3`
  color: ${({ theme }) => theme.colors.grey};
  font-weight: 400;
  text-transform: uppercase;
`

export const StyledThumbnail = styled.div`
  height: 200px;
  width: 320px;
  /* width: 100%; */
  position: relative;
  /* padding: 1rem; */
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  transition: 0.2s ease-in;
  z-index: 0;
  border: 4px solid red;
  &:hover {
    opacity: 0.8;
  }
`
