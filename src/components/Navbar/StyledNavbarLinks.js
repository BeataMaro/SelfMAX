import styled from "styled-components"

export const StyledNavlist = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }

  li {
    position: relative;
    width: 100%;
    transition: all 0.5s ease-in;
    margin-right: 0.6rem;

    @media (max-width: 768px) {
      margin-top: 1rem;
    }

    &:hover {
      cursor: pointer;
      & > .nav-item:not(.active-link) {
        color: ${({ theme }) => theme.colors.main};
      }
    }
    .nav-item {
      color: ${({ theme }) => theme.colors.lightGrey};
      letter-spacing: 1px;
      white-space: nowrap;
      transition: all 200ms ease-in;
      font-size: 1.3rem;
      text-shadow: ${({ theme }) => theme.shadows.shadow2};

      @media (max-width: 768px) {
        font-size: 1.4rem;
        z-index: 500;
      }
    }

    .active-link {
      color: ${({ theme }) => theme.colors.main};
    }

    /* submenu style */
    & > ul {
      visibility: hidden;
      background-color: ${({ theme }) => theme.colors.black};
      color: ${({ theme }) => theme.colors.grey};
      opacity: 0;
      display: none;
      position: absolute;
      transition: all 0.5s ease;
      margin-top: 3.6rem;
      top: 0;
      left: 0;
      box-shadow: ${({ theme }) => theme.shadows.shadow1};
      z-index: 3000;

      & li {
        transition: 0.5s ease;
        padding: 1.5rem;

        .nav-item {
          display: block;
          width: 100%;
        }

        .active-link {
          color: ${({ theme }) => theme.colors.main};
        }
      }
    }

    @media (min-width: 768px) {
      padding: 0.8rem;

      /* &:focus-within > ul, */
      &:hover > ul {
        visibility: visible;
        opacity: 1;
        display: block;
      }
    }
  }
`

export const StyledIcon = styled.div`
  color: white;
  background-color: ${({ theme }) => theme.colors.main};
  padding: 10px;
  border-radius: 10px;
  @media (max-width: 768px) {
    display: none;
  }
`
