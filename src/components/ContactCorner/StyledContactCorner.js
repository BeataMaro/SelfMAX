import styled from "styled-components"

export const StyledContactBar = styled.div`
  position: fixed;
  bottom: 5rem;
  right: 0;
  display: grid;
  place-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 6px 0 0 2px;
  padding: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.shadow1};
  z-index: 3000;
`

export const StyledIcons = styled.div`
  color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .phone,
  .facebook {
    font-size: 1rem;
    font-weight: 200;
    margin-right: 1rem;
    cursor: pointer;

    @media (max-width: 768px) {
      font-size: 0.8rem;
      margin-right: 0.5rem;
    }
  }
`
