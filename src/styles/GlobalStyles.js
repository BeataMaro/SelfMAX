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
    font-family: ${({ theme }) => theme.fonts.poppins};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.black};
  }

  main {
    flex: 1 0 auto;
  }
  body {
    line-height: 1.5;
    letter-spacing: 0;
  }
  ::selection {
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.lightGrey};
}

 ::placeholder {
    color: ${({ theme }) => theme.colors.greenGrey};
  }

  section { 
  max-width: 1200px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.shadow1};
  padding: 2rem;
  margin: 6rem auto;
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
  display: grid;
  place-items: center;
  min-height: 80vh;
  background-attachment: fixed;
  background-size: contain;
  outline: 5px solid ${({ theme }) => theme.colors.main};
  outline-offset: -2rem;
  background-position: center 20%;
  
  @media (min-width: 992px) {
    background-size: cover;
    outline-offset: -4rem;
  }
}

.logo {
  max-width: 100%;
  width: 5.2rem;
  max-height: 15vh;


  @media (max-width: 992px) {
    width: 4rem; 
  }
}

.section-title {
  width: 100%;
  color: ${({ theme }) => theme.colors.black};
  border-bottom: .5px solid ${({ theme }) => theme.colors.lightGrey};
  padding: 1rem 0;
  margin-bottom: 1rem;
  letter-spacing: 2px;
  font-weight: 500;
}
.static-gif {
max-width: 100%;
width: 600px;
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
  width: 60%;
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



/* .checkboxInpt {
  position: relative;
  visibility: hidden;

  &::checked {

  }
  &::after {
    visibility: visible;
    position: absolute;
    top:0;
    left: 0;
    content: "o";
    width: 10px;
    height: 10px;
    background: red;
  }
} */


`
