import styled from "styled-components"

export const StyledContactBar = styled.div`
  position: fixed;
  top: 12vh;
  right: 0;
  /* height: 6vh; */
  display: grid;
  place-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 0 0 0 5px;
  padding: 1em;
  box-shadow: ${({ theme }) => theme.shadows.shadow1};
  z-index: 3000;
`

export const StyledIcons = styled.div`
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: space-evenly;

  .phone,
  .facebook {
    cursor: pointer;
    margin-right: 1rem;
  }
`
