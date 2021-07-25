import styled from "styled-components"

export const StyledNavigation = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 0 2rem 0 1rem;
  height: 12vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 2;

  @media (max-width: 992px) {
    width: 100%;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0 1rem 0 0;
    overflow: hidden;
  }
`
//hamburger icon
export const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  z-index: 200;

  @media (max-width: 992px) {
    display: flex;
  }
`
export const Navbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 992px) {
    width: 100%;
    max-height: 100vh;
    height: 30%;
    transition: all 0.35s linear;
    position: fixed;
    top: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.9);
  }

  @media (max-width: 768px) {
    height: 40%;
  }
  &[open] {
    top: -100%;
  }
`
