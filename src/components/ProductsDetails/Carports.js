import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { StyledProductsDetails } from "./StyledProductsDetails"
import BreadCrumbs from "../BreadCrumbs"

const Carports = () => {
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

      <h2 className="section-title">Carporty</h2>
      <p>
        Wjazd o szerokości do 7,5 m bez konieczności wstawiania dodatkowych
        podpór pośrodku sprawia, że możesz swobodnie parkować 3 pojazdy.
        Poszycie paneli izolacyjnych w 100% chroni twoje auta przed nagrzewaniem
        i jednocześnie zapewnia wytrzymałość na obciążenie śniegiem odpowiednią
        nawet dla rejonów górskich.
      </p>
      {images.map((img, idx) => (
        <GatsbyImage key={idx} image={img} alt="" />
      ))}
    </StyledProductsDetails>
  )
}

export default Carports

export const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "products/Carporty" } }) {
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
