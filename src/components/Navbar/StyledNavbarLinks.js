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
    cursor: pointer;

    &:hover {
      & > .nav-item:not(.active-link) {
        color: orangered;
      }
    }

    @media (max-width: 992px) {
      margin-top: 1rem;
      padding: 0 1.5rem;
      text-shadow: 1px 1px 5px black;
    }

    .nav-item {
      letter-spacing: 2px;
      white-space: nowrap;
      transition: all 0.2s ease-in;
      font-size: 1.1rem;

      &[products="true"] {
        &::after {
          content: "▾";
          font-size: 1.5rem;
          display: inline-block;
          margin-left: 6px;
          transition: 0.25s ease-in;
        }
        &:hover::after {
          transform: rotate(90deg);
          color: ${({ theme }) => theme.colors.black};
        }
      }

      @media (max-width: 992px) {
        font-size: 1.4rem;
        z-index: 500;
        color: ${({ theme }) => theme.colors.lightGrey};
        &[products="true"]::after {
          display: none;
        }
      }
    }

    .active-link {
      font-weight: 600;
    }

    /* submenu style */
    & > ul {
      visibility: hidden;
      opacity: 0;
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      margin-top: 3.2rem;
      background-color: ${({ theme }) => theme.colors.white};
      box-shadow: ${({ theme }) => theme.shadows.shadow1};
      transition: all 0.2s ease;
      z-index: 3000;

      & li {
        color: ${({ theme }) => theme.colors.grey};
        padding: 1.5rem;
        border: 0.2px solid transparent;
        border-bottom: 0.2px solid ${({ theme }) => theme.colors.lightGrey};

        &:hover {
          background-color: white;
          border: 0.2px solid ${({ theme }) => theme.colors.lightGrey};
          border-left: 0.2px solid transparent;
          border-right: 0.2px solid transparent;
        }

        .nav-item {
          display: block;
          width: 100%;
        }

        .active-link {
          color: ${({ theme }) => theme.colors.main};
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
