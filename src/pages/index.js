import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
  return (
    <div>
      <p>Kicior</p>
      <StaticImage
        src="../assets/hero/jonas-jaeken-yellow-car-unsplash-cropp.jpg"
        alt="Yellow car parked in the driveway in front of the modern house"
        placeholder="blurred"
      />
    </div>
  )
}
