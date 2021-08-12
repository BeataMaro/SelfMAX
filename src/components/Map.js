import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const StyledMap = styled.div`
  width: 100%;
  max-height: 300px;
  overflow: hidden;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
`

const Map = () => {
  return (
    <article>
      <a
        href="https://www.google.pl/maps/place/Niedersulzerstra%C3%9Fe+2,+2225+Loidesthal,+Austria/@48.4996569,16.7371494,370m/data=!3m1!1e3!4m5!3m4!1s0x476cdf8378a49c5d:0x8f04462133bb276b!8m2!3d48.4998473!4d16.7382167"
        rel="noreferrer"
        title="Google Maps"
        target="_blank"
      >
        <StyledMap>
          <StaticImage src="../assets/location.jpg" alt="google map location" />
        </StyledMap>
      </a>
    </article>
  )
}

export default Map
