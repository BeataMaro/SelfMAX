import React from "react"

import Hero from "../components/Hero"
import Seo from "../components/Seo"
import { animationMoveX } from "../styles/Animations"

export default function Home() {
  return (
    <>
      <Seo title="Strona Główna" />
      <Hero />
    </>
  )
}
