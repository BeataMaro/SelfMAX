import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export default function Logo() {
  return (
    <Link to="/">
      <StaticImage
        src="../assets/logo-SelfMAX.png"
        alt="Logo selfMAX"
        className="logo"
      />
    </Link>
  )
}
