import React, { useRef, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { StyledProductsDetails } from "../../components/StyledProductsDetails"
import BreadCrumbs from "../../components/BreadCrumbs"
import { animationMoveX } from "../../styles/Animations"
import Seo from "../../components/Seo"

const Dachyrzymskie = () => {
  const {
    allFile: { edges },
  } = useStaticQuery(query)

  const images = edges.map(({ node }) =>
    getImage(node?.childrenImageSharp[0]?.gatsbyImageData)
  )
  const sectionRef = useRef(null)
  useEffect(() => {
    animationMoveX(sectionRef.current, true)
  }, [])

  return (
    <>
      <Seo title="Dachy Rzymskie" />
      <StyledProductsDetails ref={sectionRef}>
        <BreadCrumbs />
        <h2>Dachy rzymskie</h2>
        <p>
          Szczególnie polecane na lato, otwierane i zamykane zdalnie. Poszycie
          jest wykonane z mocnego, wodoodpornego płótna, z możliwością
          zamontowania oświetlenia zintegrowanego z konstrukcją. Dach rzymski
          tworzy na twoim tarasie przytulny, wakacyjny klimat.
        </p>
        {images.map((img, idx) => (
          <GatsbyImage key={idx} image={img} alt="Product realization" />
        ))}
      </StyledProductsDetails>
    </>
  )
}

export default Dachyrzymskie

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
