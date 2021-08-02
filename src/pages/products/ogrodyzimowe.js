import React, { useRef, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { StyledProductsDetails } from "../../components/StyledProductsDetails"
import BreadCrumbs from "../../components/BreadCrumbs"
import { animationMoveX } from "../../styles/Animations"
import Seo from "../../components/Seo"

const Ogrodyzimowe = () => {
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
      <Seo title="Ogrody zimowe" />
      <StyledProductsDetails ref={sectionRef}>
        <BreadCrumbs />
        <h2 className="section-title">Ogrody zimowe</h2>
        <p>
          Najlepszy sposób na przedłużenie sezonu letniego. W ogrodzie zimowym
          możemy zamontować ogrzewanie na podczerwień uruchamiane pilotem, które
          dosłownie w ciągu minuty ogrzeje twój taras.
          <br /> Możesz się nim cieszyć nawet wtedy, gdy aura nie zachęca do
          wychodzenia na zewnątrz.
        </p>
        {images.map((img, idx) => (
          <GatsbyImage key={idx} image={img} alt="Product realization" />
        ))}
      </StyledProductsDetails>
    </>
  )
}

export default Ogrodyzimowe

export const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "products/Ogrody-zimowe" } }) {
      edges {
        node {
          id
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
