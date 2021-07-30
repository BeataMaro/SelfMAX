import styled from "styled-components"

export const StyledTop = styled.div`
  width: 100%;
  position: sticky;
  top: 0;

  background-color: rgba(255, 255, 255, 0.4);
  padding: 1rem 2rem;
`

export const StyledIcons = styled.div`
  margin-left: auto;
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: flex-end;
  z-index: 200;

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
