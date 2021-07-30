import styled from "styled-components"

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  /* gap: 0.5rem; */
  padding: 2rem;
  color: ${({ theme }) => theme.colors.darkGrey};
  background-color: ${({ theme }) => theme.colors.lightGrey};
  box-shadow: ${({ theme }) => theme.shadows.shadow1};

  input,
  textarea {
    border: 1px solid ${({ theme }) => theme.colors.grey};
    border-radius: 6px;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.main};
    padding: 1rem;

    &:active {
      outline: none;
    }

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.main};
    }
  }

  input {
    height: 2.6rem;
  }

  textarea {
    resize: none;
    border: 1px solid grey;
  }
  label {
    margin-top: 1rem;
  }

  label[req] {
    &::after {
      content: "*";
      color: ${({ theme }) => theme.colors.main};
    }
  }
`

export const StyledTerms = styled.div`
  display: flex;
  align-items: center;
  a {
    color: ${({ theme }) => theme.colors.main};
  }
`

export const StyledInfo = styled.span`
  color: ${({ theme }) => theme.colors.success};
  text-align: center;
`
