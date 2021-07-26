import styled from "styled-components"

export const StyledNavlist = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.9);

  @media (max-width: 768px) {
    text-align: center;
  }

  li {
    position: relative;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.lightGrey};
    border-bottom: none;
    transition: all 0.5s ease-in;

    @media (max-width: 768px) {
      margin-top: 1rem;
      padding: 0.5rem;
      border: none;
    }

    &:hover {
      @media (max-width: 768px) {
        & > .nav-item {
          border: 1px solid ${({ theme }) => theme.colors.lightGrey};
          border-bottom: none;
          padding: 0.5rem;
        }
      }
      & > .nav-item:not(.active-link) {
        color: ${({ theme }) => theme.colors.main};
      }
    }
    .nav-item {
      width: 100%;
      color: ${({ theme }) => theme.colors.lightGrey};
      letter-spacing: 1px;
      white-space: nowrap;
      transition: all 200ms ease-in;
      font-size: 1.4rem;

      /* text-shadow: ${({ theme }) => theme.shadows.shadow2}; */

      @media (max-width: 768px) {
        font-size: 1.2rem;
        padding: 0.5rem;
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
      margin-left: 100%;
      top: 0;
      left: 0;
      box-shadow: ${({ theme }) => theme.shadows.shadow1};
      transition: all 0.5s ease;
      z-index: 3000;

      & li {
        transition: 0.5s ease;
        /* padding: 1.5rem; */

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
