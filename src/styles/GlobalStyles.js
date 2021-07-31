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
  background-color: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.success};
}

 ::placeholder {
    color: ${({ theme }) => theme.colors.greenGrey};
  }

  section { 
  max-width: 1200px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.shadow1};
  margin: 0 auto;
  padding: 2rem;
  margin: 5rem auto;
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
  max-width: 100%;
}

.logo {
  max-width: 100%;
  width: 5.2rem;
  max-height: 15vh;
  z-index: 3000;

  @media (max-width: 992px) {
    width: 5rem; 
  }
}

.section-title {
  width: 100%;
  color: ${({ theme }) => theme.colors.black};
  border-bottom: .5px solid ${({ theme }) => theme.colors.lightGrey};
  padding: 1rem 0;
  margin-bottom: 1rem;
  letter-spacing: 2px;
}

img {
  max-width: 100%;
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

.thumb {

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
