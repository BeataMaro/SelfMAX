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
      <Seo title="Dachy Rzymskie" />
      <StyledProductsDetails ref={sectionRef}>
        <BreadCrumbs />
        <h2 className="section-title">Dachy rzymskie</h2>
        <p>
          Szczególnie polecane na lato, otwierane i&nbsp;zamykane zdalnie.
          Poszycie jest wykonane z&nbsp;mocnego, wodoodpornego płótna,
          z&nbsp;możliwością zamontowania oświetlenia zintegrowanego
          z&nbsp;konstrukcją. Dach rzymski tworzy na twoim tarasie przytulny,
          wakacyjny klimat.
        </p>
        <Slider {...settings} className="slider">
          {images.map((img, idx) => (
            <GatsbyImage
              key={img.id || idx}
              image={img}
              alt="Dachy rzymskie - realizacje"
            />
          ))}
        </Slider>
      </StyledProductsDetails>
      <ContactCorner />
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
