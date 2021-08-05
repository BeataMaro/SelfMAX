import styled from "styled-components"

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem 4rem;
  color: ${({ theme }) => theme.colors.darkGrey};
  background-color: ${({ theme }) => theme.colors.lightGrey};
  box-shadow: ${({ theme }) => theme.shadows.shadow1};

  input,
  textarea {
    border: 1px solid ${({ theme }) => theme.colors.grey};
    border-radius: 6px;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.grey};
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
    position: relative;
    &::after {
      content: "✳";
      font-size: 0.8rem;
      color: ${({ theme }) => theme.colors.main};
    }
  }
`

export const StyledTerms = styled.div`
  display: flex;
  align-items: center;
  a {
    color: ${({ theme }) => theme.colors.textGrey};
    margin-left: 4px;
  }
`

export const StyledInfo = styled.span`
  color: ${({ theme }) => theme.colors.success};
  text-align: center;
`
