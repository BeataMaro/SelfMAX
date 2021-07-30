import React, { useState } from "react"
import Logo from "../Logo"
import Hamburger from "../Hamburger"
import NavbarLinks from "./NavbarLinks"
import { StyledNavigation, Toggle, Navbox } from "./StyledNavbar"
import ContactCorner from "../ContactCorner"

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <>
      <StyledNavigation>
        <Logo />
        <Toggle onClick={() => setNavbarOpen(prev => !prev)}>
          {navbarOpen ? <Hamburger open /> : <Hamburger />}
        </Toggle>
        {navbarOpen ? (
          <Navbox>
            <NavbarLinks toggleMenu={setNavbarOpen} />
          </Navbox>
        ) : (
          <Navbox open>
            <NavbarLinks toggleMenu={setNavbarOpen} />
          </Navbox>
        )}
      </StyledNavigation>
      <ContactCorner />
    </>
  )
}

export default Navbar
