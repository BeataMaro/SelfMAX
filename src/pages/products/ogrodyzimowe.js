import React, { useRef, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { StyledProductsDetails } from "../../components/StyledProductsDetails"
import BreadCrumbs from "../../components/BreadCrumbs"
import { animationMoveX } from "../../styles/Animations"
import ContactCorner from "../../components/ContactCorner"
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

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  }
  return (
    <>
      <Seo title="Ogrody zimowe" />
      <StyledProductsDetails ref={sectionRef}>
        <BreadCrumbs />
        <h2 className="section-title">Ogrody zimowe</h2>
        <p>
          Najlepszy sposób na przedłużenie sezonu letniego. W&nbsp;ogrodzie
          zimowym możemy zamontować ogrzewanie na podczerwień uruchamiane
          pilotem, które dosłownie w&nbsp;ciągu minuty ogrzeje twój taras.
          <br />
          Możesz się nim cieszyć nawet wtedy, gdy aura nie zachęca do
          wychodzenia na zewnątrz.
        </p>
        <Slider {...settings} className="slider">
          {images.map((img, idx) => (
            <GatsbyImage
              key={img.id || idx}
              image={img}
              alt={img.base || "Ogrody zimowe - realizacje"}
            />
          ))}
        </Slider>
      </StyledProductsDetails>
      <ContactCorner />
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
