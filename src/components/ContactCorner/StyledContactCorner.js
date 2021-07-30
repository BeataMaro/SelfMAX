import styled from "styled-components"

export const StyledTop = styled.div`
  position: fixed;
  width: 100%;
  top: 12vh;
  right: 0;
  background-color: white;
  padding: 1rem 2rem;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 0.2rem 1rem;
  }
`

export const StyledIcons = styled.div`
  margin-left: auto;
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: flex-end;

  .phone,
  .facebook {
    cursor: pointer;
    margin-left: 1rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-end;
    padding: 1rem;

    .phone {
      margin-right: 1rem;
    }
  }
`
