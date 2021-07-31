import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { StyledProductsDetails } from "./StyledProductsDetails"
import BreadCrumbs from "../BreadCrumbs"

const Polycarbonate = () => {
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
      <h2>Zadaszenia z poliwęglanu</h2>
      <p>
        Poliwęglan komorowy grubości 16 mm ze zintegrowanym filtrem UV tworzy
        optymalną osłonę przeciwsłoneczną. Zatrzymuje 30% światła dzięki czemu
        na twoim tarasie jest wciąż jasno, a jednocześnie promienie słoneczne
        przestają być uciążliwe. Połączenie tych zalet ze stosunkowo niskimi
        kosztami sprawia, że jest to najczęściej wybierane rozwiązanie.
      </p>
      {images.map((img, idx) => (
        <GatsbyImage key={idx} image={img} alt="" />
      ))}
    </StyledProductsDetails>
  )
}

export default Polycarbonate

export const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "products/Poliweglan" } }) {
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
