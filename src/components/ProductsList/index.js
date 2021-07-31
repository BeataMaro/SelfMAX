import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import { Button } from "../../components/atoms/Button"
import {
  StyledProducts,
  StyledCategory,
  StyledThumbnailContainer,
  StyledThumbnail,
} from "./StyledProductsList"

const ProductsList = () => {
  const {
    allFile: { edges },
  } = useStaticQuery(query)

  return (
    <StyledProducts>
      {edges.map(({ node }) => (
        <Link
          to={node.base.substr(0, node.base.lastIndexOf("."))}
          key={node.id}
        >
          <StyledThumbnailContainer>
            <StyledThumbnail>
              <GatsbyImage
                image={node?.childrenImageSharp[0]?.gatsbyImageData}
                alt="Product realization thumb"
                className="thumb"
              />
              <StyledCategory
                className={node.base.substr(0, node.base.lastIndexOf("."))}
              />
              <Button empty className="thumb-button">
                Sprawdź
              </Button>
            </StyledThumbnail>
          </StyledThumbnailContainer>
        </Link>
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
