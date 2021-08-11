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
      <Seo title="Carporty" />
      <StyledProductsDetails ref={sectionRef}>
        <BreadCrumbs />
        <h2 className="section-title">Carporty</h2>
        <article>
          <p>
            Wjazd o szerokości do 7,5 m bez konieczności wstawiania dodatkowych
            podpór pośrodku sprawia, że możesz swobodnie parkować 3 pojazdy.
            Poszycie paneli izolacyjnych w 100% chroni twoje auta przed
            nagrzewaniem i&nbsp;jednocześnie zapewnia wytrzymałość na obciążenie
            śniegiem odpowiednią nawet dla rejonów górskich.
          </p>
        </article>
        <Slider {...settings} className="slider">
          {images.map((img, idx) => (
            <GatsbyImage
              key={img.id || idx}
              image={img}
              alt="Carporty - realizacje"
            />
          ))}
        </Slider>
      </StyledProductsDetails>
      <ContactCorner />
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
