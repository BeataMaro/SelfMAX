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
    border: 1px solid transparent;
    border-bottom: none;
    transition: all 0.5s ease-in;
    cursor: pointer;

    @media (max-width: 992px) {
      margin-top: 1rem;
      padding: 0 1.5rem;

      &:hover {
        border: 1px solid ${({ theme }) => theme.colors.lightGrey};
        border-bottom: none;
      }
    }

    &:hover {
      & > .nav-item:not(.active-link) {
        color: ${({ theme }) => theme.colors.white};
        text-shadow: ${({ theme }) => theme.shadows.shadow2};
      }
    }
    .nav-item {
      color: ${({ theme }) => theme.colors.lightGrey};
      letter-spacing: 0.5px;
      white-space: nowrap;
      transition: all 0.2s ease-in;
      font-size: 1.1rem;

      @media (max-width: 992px) {
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
      background-color: ${({ theme }) => theme.colors.darkGrey};
      color: ${({ theme }) => theme.colors.grey};
      opacity: 0;
      display: none;
      position: absolute;
      transition: all 0.5s ease;
      margin-top: 3.2rem;
      top: 0;
      left: 0;
      /* box-shadow: ${({ theme }) => theme.shadows.shadow1}; */
      z-index: 3000;

      & li {
        transition: 0.12s ease;
        padding: 1.5rem;

        &:hover {
          background-color: ${({ theme }) => theme.colors.black};
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
