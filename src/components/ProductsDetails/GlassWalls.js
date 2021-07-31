import React from "react"
import { graphql } from "gatsby"

import { StyledProductsDetails } from "./StyledProductsDetails"
import BreadCrumbs from "../BreadCrumbs"

const GlassWalls = () => {
  return (
    <StyledProductsDetails>
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
