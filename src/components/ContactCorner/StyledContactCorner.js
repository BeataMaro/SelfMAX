import styled from "styled-components"

export const StyledContactBar = styled.div`
  position: fixed;
  top: 12vh;
  right: 0;
  background-color: rgba(255, 255, 255, 0.95);
  /* background-color: ${({ theme }) => theme.colors.main}; */
  border-radius: 0 0 0 1rem;
  z-index: 3000;
  padding: 0.2rem;
  box-shadow: ${({ theme }) => theme.shadows.shadow1};

  @media (min-width: 992px) {
    padding: 1rem 2rem;
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
