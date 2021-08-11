import styled from "styled-components"

export const Button = styled.button`
  margin: 1rem auto;
  background-color: ${({ empty, theme }) =>
    empty ? "transparent" : theme.colors.main};
  color: ${({ empty, theme }) =>
    empty ? theme.colors.main : theme.colors.white};
  padding: 0.5rem 1rem;
  border: 0.12em solid
    ${({ empty, theme }) => (empty ? theme.colors.main : theme.colors.main)};

  font-weight: 400;
  text-align: center;
  letter-spacing: 0.2rem;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: ${({ theme }) => theme.colors.main};
    color: ${({ empty, theme }) =>
      empty ? theme.colors.white : theme.colors.white};
  }
  &:active,
  &:focus {
    outline: 0.5px solid ${({ theme }) => theme.colors.lightGrey};
  }
`
