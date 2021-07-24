import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export default function Logo() {
  return (
    <Link to="/">
      <StaticImage
        src="../assets/selfMAX-logo.png"
        alt="Logo selfMAX"
        // style={{ width: "100px", maxWidth: "100%" }}
        className="logo"
      />
    </Link>
  )
}
