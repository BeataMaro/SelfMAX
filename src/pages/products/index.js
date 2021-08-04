import React, { useRef, useEffect } from "react"

import ProductsList from "../../components/ProductsList"
import Seo from "../../components/Seo"
import { animationMoveX } from "../../styles/Animations"

const Products = () => {
  const sectionRef = useRef(null)
  useEffect(() => {
    animationMoveX(sectionRef.current, true)
  }, [])
  return (
    <>
      <Seo title="Produkty" />
      <section ref={sectionRef}>
        <h2 className="section-title">Oferta</h2>
        <ProductsList />
      </section>
    </>
  )
}

export default Products
