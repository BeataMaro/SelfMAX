import styled from "styled-components"

export const StyledContactBar = styled.div`
  position: fixed;
  /* top: 12vh; */
  bottom: 0;
  /* width: 100vw; */
  right: 0;
  display: grid;
  place-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 5px 5px 0 0;
  padding: 1em;
  box-shadow: ${({ theme }) => theme.shadows.shadow1};
  z-index: 3000;
`

export const StyledIcons = styled.div`
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: space-evenly;
  margin-left: auto;

  .phone,
  .facebook {
    cursor: pointer;
    margin-right: 1rem;
  }
`
