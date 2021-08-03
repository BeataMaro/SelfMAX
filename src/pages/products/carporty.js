import React, { useRef, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { StyledProductsDetails } from "../../components/StyledProductsDetails"
import BreadCrumbs from "../../components/BreadCrumbs"
import { animationMoveX } from "../../styles/Animations"
import Seo from "../../components/Seo"

const Carporty = () => {
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
      <Seo title="Carporty" />
      <StyledProductsDetails ref={sectionRef}>
        <BreadCrumbs />
        <h2 className="section-title">Carporty</h2>
        <p>
          Wjazd o szerokości do 7,5 m bez konieczności wstawiania dodatkowych
          podpór pośrodku sprawia, że możesz swobodnie parkować 3 pojazdy.
          Poszycie paneli izolacyjnych w 100% chroni twoje auta przed
          nagrzewaniem i jednocześnie zapewnia wytrzymałość na obciążenie
          śniegiem odpowiednią nawet dla rejonów górskich.
        </p>
        <div className="gallery">
          {images.map((img, idx) => (
            <GatsbyImage key={idx} image={img} alt="Product realization" />
          ))}
        </div>
      </StyledProductsDetails>
    </>
  )
}

export default Carporty

export const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "products/Carporty" } }) {
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
