import React, { useRef, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styled from "styled-components"
import { StyledProductsDetails } from "../../components/StyledProductsDetails"
import BreadCrumbs from "../../components/BreadCrumbs"
import { animationMoveX } from "../../styles/Animations"
import gif from "../../assets/products/Zabudowa/gifs/zabudowa.gif"
import ContactCorner from "../../components/ContactCorner"
import Seo from "../../components/Seo"

const StyledList = styled.ul`
  list-style: inside;

  li {
    margin-top: 1rem;
  }
`

const Zabudowa = () => {
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
      <Seo title="Zabudowa" />
      <StyledProductsDetails ref={sectionRef}>
        <BreadCrumbs />
        <h2 className="section-title">Zabudowa</h2>
        <StyledList>
          <li>Ścianki przesuwne ze szkła</li>
          <li>Ścianki przesuwne ze szkła (poziome)</li>
          <li>Markizy ZIP</li>
          <li>Ścianki aluminiowe</li>
        </StyledList>
        <Slider {...settings} className="slider">
          {images.map((img, idx) => (
            <GatsbyImage
              key={img.id || idx}
              image={img}
              alt="Zabudowa - realizacje"
            />
          ))}
        </Slider>
        <div className="gif">
          <img src={gif} alt="Zabudowa - prezentacja działania" />
        </div>
      </StyledProductsDetails>
      <ContactCorner />
    </>
  )
}

export default Zabudowa

export const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "products/Zabudowa" } }) {
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
