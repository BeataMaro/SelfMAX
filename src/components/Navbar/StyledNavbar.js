import styled from "styled-components"

export const StyledNavigation = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  height: 12vh;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};

  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadows.shadow1};
  z-index: 4000;
`
//hamburger icon
export const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  z-index: 5000;

  @media (max-width: 992px) {
    display: flex;
    margin-right: 1rem;
  }
`
export const Navbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 992px) {
    width: 100%;
    height: 50%;
    transition: all 0.35s linear;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    box-shadow: ${({ theme }) => theme.shadows.shadow1};
  }

  &[open] {
    top: -100%;
  }
`
