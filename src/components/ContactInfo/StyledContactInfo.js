import styled from "styled-components"

export const StyledInfo = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};

  h3 {
    letter-spacing: 1px;
    font-weight: 400;
    position: relative;
  }
  h4 {
    margin: 2rem auto;
    font-weight: 600;
    letter-spacing: 1px;
  }

  p,
  strong {
    letter-spacing: 0.6px;
    font-weight: 400;
  }
`

export const StyledIcons = styled.div`
  align-self: flex-start;
  display: flex;
  align-items: space-between;
  justify-content: space-evenly;
  min-width: 75%;
  padding: 1rem;

  @media (min-width: 768px) {
    min-width: 90%;
  }
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
