import styled from "styled-components"

export const StyledInfo = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  padding: 2rem 0;

  h3 {
    letter-spacing: 1px;
    font-weight: 400;
    margin-bottom: 2rem;
  }

  p,
  strong {
    letter-spacing: 0.6px;
    font-weight: 400;
  }
`

export const StyledIcons = styled.div`
  display: flex;
  align-items: space-evenly;
  justify-content: space-evenly;
`

export const StyledCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`

export const StyledIcon = styled.div`
  width: 3rem;
  height: 3rem;
  color: ${({ theme }) => theme.colors.darkGrey};
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 50%;
  display: grid;
  place-items: center;
  margin-right: 1rem;
`
