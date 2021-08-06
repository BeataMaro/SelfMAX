import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`

:root {
  --nav-height: 15vh;
  scroll-padding-top: calc(var(--nav-height) + 10px);
  scroll-padding-top: 15vh;

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

.hero-image {
clip-path: polygon(0 0, 30% 15%, 70% 15%, 100% 0%, 95% 25%, 100% 65%, 50% 100%, 0 65%, 5% 25%);
max-width: 40vw;
position: relative;

@media (max-width: 992px) {
  max-width: 80vw;
}
/* &::after {
  position: absolute;
  top: 0;
  left: 0;
  right: 50%;
  bottom: 0;
  content: "";
  display: block;
  width: 50%;
  height: 100%;
  background-color: yellow;
  filter: blur(4px);
  } */
}

.hero-button {
  @media (max-width: 992px) {
    font-size: .8rem;
  }
}

.logo {
  max-width: 100%;
  width: 6rem;
  max-height: 15vh;
  z-index: 10000;

  @media (max-width: 992px) {
    width: 5rem; 
  }
}

.section-title {
 
  color: ${({ theme }) => theme.colors.black};
  border-left: 5px solid ${({ theme }) => theme.colors.main};
  margin: 2rem 0;
  text-transform: uppercase;
  display: inline-flex;

}

.slider {
  max-width: 600px;
  margin: 4rem auto;
  box-shadow: ${({ theme }) => theme.shadows.shadow1};
  position: relative;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: -2rem;
    bottom: -2rem;
    left: -2rem;
    right: -2rem;
    background-color: #e3e6ef;
  }
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

.thumb {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%; 
  transition: 0.4s ease-in-out;
}
`
