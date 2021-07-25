import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`

:root {
  --nav-height: 50px;
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
    
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: ${({ theme }) => theme.fonts.saira};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.black};
  }

  main {
    flex: 1 0 auto;
  }
  body {

    line-height: 1.5;
    letter-spacing: 0;
    /* overflow: hidden; */
  }
  ::selection {
  background-color: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.success};
}

 ::placeholder {
    color: ${({ theme }) => theme.colors.greenGrey};
  }

  section, header { 
  max-width: 1400px;
  background-color: ${({ theme }) => theme.colors.white};
  border: .5px solid ${({ theme }) => theme.colors.lightGrey};
  margin: 0 auto;
  /* padding: 2rem; */
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

.hero {
  min-height: 100vh;
  width: 100%;
  background-attachment: fixed;
  position: relative;
  /* clip-path: polygon(0 0, 100% 0%, 100% 84%, 0% 100%); */
  
}
.logo {

  max-width: 100%;
  width: 6rem;
  max-height: 15vh;

  @media (max-width: 768px) {
    width: 5.5rem;
    z-index: 100;
  
  }
  
}

.section-title {
    width: 100%;
  color: ${({ theme }) => theme.colors.lightGrey};
  background-color: ${({ theme }) => theme.colors.grey};
  padding: 2rem;
  letter-spacing: 3px;
}

.image {
  max-width: 100%;
}

.static-gif {
max-width: 100%;
width: 600px;
}

`
