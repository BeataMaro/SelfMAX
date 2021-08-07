import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`

:root {
  --nav-height: 12vh;
  scroll-padding-top: calc(var(--nav-height) + 10px);
  scroll-padding-top: 12vh;

}

* {
  margin: 0;
  padding: 0;
}

 *, *:before, *:after {
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
  box-shadow: ${({ theme }) => theme.shadows.shadow1};
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
.logo {
  max-width: 100%;
  width: 4rem;
  max-height: 15vh;
  z-index: 10000;

  @media (min-width: 768px) {
    width: 5rem;
  }

  @media (min-width: 992px) {
    width: 6rem; 
  }
}

.section-title {
 
  color: ${({ theme }) => theme.colors.black};
  border-left: 5px solid ${({ theme }) => theme.colors.main};
  margin: 2rem 0;
  text-transform: uppercase;
  display: inline-flex;

}
.error {
  color: ${({ theme }) => theme.colors.error};
  white-space: pre-line;
}

.checkboxInpt {
  margin-right: 1rem;
}

.lamele {
    &::after {
      content: "Lamele";
  }
}

.carporty {
    &::after {
      content: "Carporty";
  }
}

.ogrodyzimowe {
  &::after {
    content: "Ogrody zimowe";
  }
}

.zabudowa {
    &::after {
      content: "Zabudowa";
  }
}

.poliweglan {
  &::after {
    content: "Zadaszenia z poliwęglanu";
  }
}

.dachyrzymskie {
 
  &::after {
    content: "Dachy rzymskie";
  }
}

`
