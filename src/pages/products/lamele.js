import React, { useRef, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { StyledProductsDetails } from "../../components/StyledProductsDetails"
import BreadCrumbs from "../../components/BreadCrumbs"
import { animationMoveX } from "../../styles/Animations"

import Seo from "../../components/Seo"

const Lamele = () => {
  const {
    allFile: { edges },
  } = useStaticQuery(query)

  const carouselImages = edges.map(({ node }) =>
    getImage(node?.childrenImageSharp[0]?.gatsbyImageData)
  )

  const sectionRef = useRef(null)
  useEffect(() => {
    animationMoveX(sectionRef.current, true)
  }, [])
  return (
    <>
      <Seo title="Lamele" />
      <StyledProductsDetails ref={sectionRef}>
        <BreadCrumbs />
        <h2 className="section-title">Lamele</h2>
        <p>
          Zadaszenie z poszyciem z lameli to najbardziej funkcjonalne i
          efektowne rozwiązanie, które jest wizytówką twojego domu. Sterowane
          pilotem, dają pełną kontrolę nad ilością światła na tarasie. Tego typu
          pergola ochroni cię przed upałami w najgorętsze dni lub przed opadami,
          gdy pogoda się pogorszy.{" "}
        </p>
        {carouselImages.map(img => (
          <div key={img.id}>
            <GatsbyImage image={img} alt={img.base} />
          </div>
        ))}
      </StyledProductsDetails>
    </>
  )
}

export default Lamele

export const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "products/Lamele" } }) {
      edges {
        node {
          id
          base
          childrenImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              width: 900
              height: 600
              quality: 70
              blurredOptions: { width: 100 }
            )
          }
        }
      }
    }
  }
`
