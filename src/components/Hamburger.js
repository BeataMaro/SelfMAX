import styled from "styled-components"

const Hamburger = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  width: 60px;
  height: 0.3rem;
  border-radius: 40px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;

  &[open] {
    transform: rotate(-45deg);
    width: 30px;
    height: 0.2rem;
    background-color: ${({ theme }) => theme.colors.black};
    &:hover,
    &:hover::before {
      background-color: ${({ theme }) => theme.colors.textGrey};
    }
  }

  ::before,
  ::after {
    position: absolute;
    content: "";
    height: 0.3rem;
    border-radius: 40px;
    background-color: ${({ theme }) => theme.colors.black};
    transition: all 0.3s linear;
  }

  ::before {
    top: -10px;
    width: 50px;
    transition: all 0.3s linear;
  }

  ::after {
    top: 10px;
    width: 30px;
  }
  &[open]::before {
    transform: rotate(-90deg) translate(-10px, 0) rotate(0deg);
    width: 30px;
    height: 0.2rem;
    background-color: ${({ theme }) => theme.colors.black};
  }

  &[open]::after {
    opacity: 0;
    transform: rotate(90deg) rotate(0);
  }
`
export default Hamburger
