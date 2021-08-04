import styled from "styled-components"

export const StyledNavlist = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
  }

  li {
    position: relative;
    width: 100%;

    &:hover {
      & > .nav-item:not(.active-link) {
        color: ${({ theme }) => theme.colors.main};
      }
    }

    @media (max-width: 992px) {
      margin-top: 1rem;
      padding: 0 1.5rem;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    }

    .nav-item {
      letter-spacing: 1px;
      white-space: nowrap;
      transition: all 0.1s ease-in;
      font-size: 1.1rem;
      cursor: pointer;

      &.desktop {
        @media (min-width: 992px) {
          &::after {
            content: "";
            display: block;
            width: 0;
            height: 2px;
            background-color: ${({ theme }) => theme.colors.main};
            transition: width 0.3s;
          }
          &:hover::after {
            width: 100%;
          }
        }
      }

      &[products="true"] {
        &::before {
          content: "▾";
          display: inline-block;
          margin-right: 8px;
          transition: 0.2s ease-in;
        }
        &:hover::before {
          transform: rotate(180deg);
          color: ${({ theme }) => theme.colors.main};
        }
      }

      @media (max-width: 992px) {
        font-size: 1.4rem;
        z-index: 500;
        color: ${({ theme }) => theme.colors.lightGrey};
        &[products="true"]::before {
          display: none;
        }
      }
    }

    .active-link {
      background-color: ${({ theme }) => theme.colors.main};
      color: white;
    }

    /* submenu */
    & > ul {
      visibility: hidden;
      opacity: 0;
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      margin-top: 3rem;
      background-color: ${({ theme }) => theme.colors.white};
      box-shadow: ${({ theme }) => theme.shadows.shadow2};
      transition: all 0.2s ease;
      z-index: 3000;

      & li {
        color: ${({ theme }) => theme.colors.black};
        font-weight: 500;
        padding: 1.2rem;
        border: 0.05px solid transparent;
        border-bottom: 0.05px solid ${({ theme }) => theme.colors.lightGrey};

        &:hover {
          /* border-color: ${({ theme }) => theme.colors.grey}; */
          background-color: white;
          border-left: 0.05px solid transparent;
          border-right: 0.05px solid transparent;
        }

        &.nav-item {
          display: block;
          width: 100%;
          height: 100%;

          &:hover::after {
            visibility: hidden;
          }
        }
      }
    }

    @media (min-width: 992px) {
      padding: 0.8rem;

      /* &:focus-within > ul, */
      &:hover > ul {
        visibility: visible;
        opacity: 1;
        display: block;
        color: red;
      }
    }
  }
`
