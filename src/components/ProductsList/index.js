import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
// import { getImage } from "gatsby-plugin-image"
// import { BgImage } from "gbimage-bridge"

import { Button } from "../../components/atoms/Button"
import {
  StyledProducts,
  StyledCategory,
  StyledDescription,
  StyledH3,
  StyledThumbnail,
} from "./StyledProductsList"

const ProductsList = () => {
  const {
    allFile: { edges },
  } = useStaticQuery(query)

  edges.map(({ node }) =>
    console.log(node.childrenImageSharp[0].gatsbyImageData)
  )

  // const pluginImage = getImage(heroBgImage)

  return (
    <>
      {edges.map(({ node }) => (
        <GatsbyImage
          key={node.id}
          image={node?.childrenImageSharp[0]?.gatsbyImageData}
          alt=""
        />
      ))}
    </>
    // <StyledProducts>
    //   <Link to="/products/ogrodyzimowe">
    //     <StyledCategory>
    //       <StyledThumbnail>
    //         <StaticImage
    //           src="../../assets/products/Ogrody-zimowe/ogrody-zimowe1.jpg"
    //           alt=""
    //           placeholder="blurred"
    //         />
    //         <StyledDescription>
    //           <StyledH3>Ogrody Zimowe</StyledH3>
    //           <Button>Sprawdź</Button>
    //         </StyledDescription>
    //       </StyledThumbnail>
    //     </StyledCategory>
    //   </Link>
    //   <Link to="/products/dachyrzymskie">
    //     <StyledCategory>
    //       <StyledThumbnail>
    //         <StaticImage
    //           src="../../assets/products/Dachy-rzymskie/dachy-rzymskie1.jpg"
    //           alt="Dachy rzymskie"
    //           placeholder="blurred"
    //         />
    //         <StyledDescription>
    //           <StyledH3>Dachy Rzymskie</StyledH3>
    //           <Button>Sprawdź</Button>
    //         </StyledDescription>
    //       </StyledThumbnail>
    //     </StyledCategory>
    //   </Link>
    //   <Link to="/products/carporty">
    //     <StyledCategory>
    //       <StyledThumbnail>
    //         <StaticImage
    //           src="../../assets/products/Carporty/carporty2.jpg"
    //           alt="Carporty"
    //           placeholder="blurred"
    //         />
    //       </StyledThumbnail>
    //       <StyledDescription>
    //         <StyledH3>Carporty</StyledH3>
    //         <Button>Sprawdź</Button>
    //       </StyledDescription>
    //     </StyledCategory>
    //   </Link>
    //   <Link to="/products/lamele">
    //     <StyledCategory>
    //       <StyledThumbnail>
    //         <StaticImage
    //           src="../../assets/products/Lamele/lamele2.jpg"
    //           alt="Lamele"
    //           placeholder="blurred"
    //         />
    //       </StyledThumbnail>
    //       <StyledDescription>
    //         <StyledH3>Lamele</StyledH3>
    //         <Button>Sprawdź</Button>
    //       </StyledDescription>
    //     </StyledCategory>
    //   </Link>
    //   <Link to="/products/poliweglan">
    //     <StyledCategory>
    //       <StyledThumbnail>
    //         <StaticImage
    //           src="../../assets/products/Poliweglan/zadaszenia-z-poliweglanu2.jpg"
    //           alt="Zadaszenia z poliwęglanu"
    //           placeholder="blurred"
    //         />
    //       </StyledThumbnail>
    //       <StyledDescription>
    //         <StyledH3>Zadaszenia z poliwęglanu</StyledH3>
    //         <Button>Sprawdź</Button>
    //       </StyledDescription>
    //     </StyledCategory>
    //   </Link>
    //   <Link to="/products/zabudowa">
    //     <StyledCategory>
    //       <StyledThumbnail>
    //         <StaticImage
    //           src="../../assets/products/Zabudowa/ścianka szklana realizacja.jpg"
    //           alt="Zabudowa - ścianka szklana"
    //           placeholder="blurred"
    //         />
    //       </StyledThumbnail>
    //       <StyledDescription>
    //         <StyledH3>Zabudowa</StyledH3>
    //         <Button>Sprawdź</Button>
    //       </StyledDescription>
    //     </StyledCategory>
    //   </Link>
    // </StyledProducts>
  )
}

export default ProductsList

export const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "products/thumbs" } }) {
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
