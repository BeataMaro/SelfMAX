import React, { useRef, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { StyledProductsDetails } from "./StyledProductsDetails"
import BreadCrumbs from "../BreadCrumbs"
import { animationMoveX } from "../../styles/Animations"

const Lamellas = () => {
  const {
    allFile: { edges },
  } = useStaticQuery(query)

  const images = edges.map(({ node }) =>
    getImage(node?.childrenImageSharp[0]?.gatsbyImageData)
  )

  console.log(images)

  const sectionRef = useRef(null)
  useEffect(() => {
    animationMoveX(sectionRef.current, true)
  }, [])

  return (
    <StyledProductsDetails ref={sectionRef}>
      <BreadCrumbs />
      <h2 className="section-title">Lamele</h2>
      <p>
        Zadaszenie z poszyciem z lameli to najbardziej funkcjonalne i efektowne
        rozwiązanie, które jest wizytówką twojego domu. Sterowane pilotem, dają
        pełną kontrolę nad ilością światła na tarasie. Tego typu pergola ochroni
        cię przed upałami w najgorętsze dni lub przed opadami, gdy pogoda się
        pogorszy.{" "}
      </p>
      {images.map((img, idx) => (
        <GatsbyImage key={idx} image={img} alt="Product realization" />
      ))}
    </StyledProductsDetails>
  )
}

export default Lamellas

export const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "products/Lamele" } }) {
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
