import styled from "styled-components"

export const StyledNavigation = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 0 1rem;
  height: 12vh;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
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
    height: 30%;
    transition: all 0.35s linear;
    position: fixed;
    top: 0;
    right: 0;
    background-color: hsla(229, 30%, 21%, 0.99);
    /* background-color: ${({ theme }) => theme.colors.main}; */
  }

  @media (max-width: 768px) {
    height: 40%;
  }
  &[open] {
    top: -100%;
  }
`
