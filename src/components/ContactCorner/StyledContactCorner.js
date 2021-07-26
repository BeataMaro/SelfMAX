import styled from "styled-components"

export const StyledIcons = styled.div`
  color: ${({ theme }) => theme.colors.black};
  position: absolute;
  top: 0;
  right: 0;
  width: 280px;
  padding: 2rem;
  display: flex;
  justify-content: space-around;
  z-index: 200;

  .phone,
  .facebook {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    /* display: none; */
    width: 100%;
    justify-content: flex-end;
    padding: 1rem;

    .phone {
      margin-right: 1rem;
    }
  }
`
