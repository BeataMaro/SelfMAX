import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
}

 *, *::before, *::after {
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
    font-family: 'Saira Semi Condensed', sans-serif;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.black};
  }

  body {
    background-color: ${({ theme }) => theme.colors.black};
  }

  main {
    flex: 1 0 auto;
  }

  ::selection {
  background-color: ${({ theme }) => theme.colors.lightGrey};
  color: ${({ theme }) => theme.colors.main};
}

 ::placeholder {
    color: ${({ theme }) => theme.colors.textGrey};
  }

  section { 
  max-width: 1200px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.shadow3};
  padding: 2rem;
  margin: auto;
  }

ul {
  list-style: none;
}
a {
  text-decoration: none;
  color: inherit;

:hover {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  }
}
.section-title {
  color: ${({ theme }) => theme.colors.black};
  border-left: 5px solid ${({ theme }) => theme.colors.main};
  margin: 2rem 0;
  text-transform: uppercase;
  display: inline-flex;
}
`
