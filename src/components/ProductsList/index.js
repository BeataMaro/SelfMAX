import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import {
  StyledProducts,
  StyledLink,
  StyledCategory,
  StyledThumbnail,
} from "./StyledProductsList"

const ProductsList = () => {
  const {
    allFile: { edges },
  } = useStaticQuery(query)

  return (
    <StyledProducts>
      {edges.map(({ node }) => (
        <StyledLink
          to={node.base.substr(0, node.base.lastIndexOf("."))}
          key={node.id}
        >
          <StyledThumbnail>
            <GatsbyImage
              image={node?.childrenImageSharp[0]?.gatsbyImageData}
              alt="Product realization thumb"
              className="thumb"
            />
            <StyledCategory
              className={`thumb-category ${node.base.substr(
                0,
                node.base.lastIndexOf(".")
              )}`}
            />
          </StyledThumbnail>
        </StyledLink>
      ))}
    </StyledProducts>
  )
}

export default ProductsList

export const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "products/thumbs" } }) {
      edges {
        node {
          id
          base
          childrenImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
`
