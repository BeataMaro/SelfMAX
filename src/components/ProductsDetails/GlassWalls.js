import React, { useRef, useEffect } from "react"
import { graphql } from "gatsby"

import { StyledProductsDetails } from "./StyledProductsDetails"
import BreadCrumbs from "../BreadCrumbs"
import { animationMoveX } from "../../styles/Animations"

const GlassWalls = () => {
  const sectionRef = useRef(null)
  useEffect(() => {
    animationMoveX(sectionRef.current, true)
  }, [])

  return (
    <StyledProductsDetails ref={sectionRef}>
      <BreadCrumbs />
    </StyledProductsDetails>
  )
}

export default GlassWalls

export const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "products/Zabudowa" } }) {
      edges {
        node {
          id
          childrenImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
`
