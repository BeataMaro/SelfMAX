import React, { useRef, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { StyledProductsDetails } from "../../components/StyledProductsDetails"
import BreadCrumbs from "../../components/BreadCrumbs"
import { animationMoveX } from "../../styles/Animations"
import Seo from "../../components/Seo"

const Poliweglan = () => {
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
      <Seo title="Zadaszenia z Poliwęglanu" />
      <StyledProductsDetails ref={sectionRef}>
        <BreadCrumbs />
        <h2 className="section-title">Zadaszenia z poliwęglanu</h2>
        <p>
          Poliwęglan komorowy grubości 16 mm ze zintegrowanym filtrem UV tworzy
          optymalną osłonę przeciwsłoneczną. Zatrzymuje 30% światła dzięki czemu
          na twoim tarasie jest wciąż jasno, a jednocześnie promienie słoneczne
          przestają być uciążliwe. Połączenie tych zalet ze stosunkowo niskimi
          kosztami sprawia, że jest to najczęściej wybierane rozwiązanie.
        </p>
        <Slider {...settings} className="slider">
          {images.map((img, idx) => (
            <GatsbyImage
              key={img.id || idx}
              image={img}
              alt="Zadaszenia z poliwęglanu - realizacje"
            />
          ))}
        </Slider>
      </StyledProductsDetails>
    </>
  )
}

export default Poliweglan

export const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "products/Poliweglan" } }) {
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
