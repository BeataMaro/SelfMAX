import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { StyledProductsDetails } from "./StyledProductsDetails"
import BreadCrumbs from "../BreadCrumbs"

const RomanRoofs = () => {
  const {
    allFile: { edges },
  } = useStaticQuery(query)

  const images = []
  {
    edges.map(({ node }) => {
      let image = getImage(node?.childrenImageSharp[0]?.gatsbyImageData)
      images.push(image)
    })
  }

  return (
    <StyledProductsDetails>
      <BreadCrumbs />
      <h2>Dachy rzymskie</h2>
      <p>
        Szczególnie polecane na lato, otwierane i zamykane zdalnie. Poszycie
        jest wykonane z mocnego, wodoodpornego płótna, z możliwością
        zamontowania oświetlenia zintegrowanego z konstrukcją. Dach rzymski
        tworzy na twoim tarasie przytulny, wakacyjny klimat.
      </p>
      {images.map((img, idx) => (
        <GatsbyImage key={idx} image={img} alt="" />
      ))}
    </StyledProductsDetails>
  )
}

export default RomanRoofs

export const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "products/Dachy-rzymskie" } }) {
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
