import React, { useRef, useEffect } from "react"
// import { graphql, useStaticQuery } from "gatsby"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { StyledProductsDetails } from "../../components/StyledProductsDetails"
import BreadCrumbs from "../../components/BreadCrumbs"
import { animationMoveX } from "../../styles/Animations"
import gif from "../../assets/products/Zabudowa/gifs/gif.gif"
import Seo from "../../components/Seo"

const Zabudowa = () => {
  const sectionRef = useRef(null)
  useEffect(() => {
    animationMoveX(sectionRef.current, true)
  }, [])

  return (
    <>
      <Seo title="Zabudowa" />
      <StyledProductsDetails ref={sectionRef}>
        <BreadCrumbs />
        <img src={gif} alt="" className="static-gif" />
      </StyledProductsDetails>
    </>
  )
}

export default Zabudowa
