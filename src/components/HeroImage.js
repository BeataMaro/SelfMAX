// import React, { useRef, useEffect } from "react"
// import { graphql, useStaticQuery, Link } from "gatsby"
// import { getImage } from "gatsby-plugin-image"
// import { BgImage } from "gbimage-bridge"
// import styled from "styled-components"
// import { Button } from "./atoms/Button"
// import { animationMoveY } from "../styles/Animations"

// const StyledHero = styled.div`
//   background-color: rgba(0, 0, 0, 0.6);
// `

// const StyledHeroBtn = styled(Button)`
//   font-weight: 300;
//   margin-bottom: 50%;
//   &:hover {
//     text-shadow: ${({ theme }) => theme.shadows.shadow2};
//   }
// `

// const StyledHeroText = styled.div`
//   margin-top: 35%;

//   @media (min-width: 768px) {
//     margin-top: 20%;
//   }
//   @media (min-width: 992px) {
//     margin-top: 10%;
//   }

//   h1 {
//     letter-spacing: 1.2rem;
//     text-align: center;
//     padding: 0.5rem 1.5rem;
//     background-color: ${({ theme }) => theme.colors.white};
//     color: black;
//     font-size: 2rem;
//     font-weight: 500;
//     margin: 30% auto 0;

//     @media (min-width: 768px) {
//       font-size: 3rem;
//       margin: 20% auto 0;
//     }
//   }

//   h2 {
//     text-align: center;
//     padding: 0.5rem;
//     color: ${({ theme }) => theme.colors.lightGrey};
//     letter-spacing: 2px;
//     background-color: black;
//     font-size: 1rem;
//     font-weight: 300;

//     @media (min-width: 768px) {
//       font-size: 1.5rem;
//     }
//   }
// `

// const HeroImage = () => {
//   const { heroBgImage } = useStaticQuery(query)
//   const pluginImage = getImage(heroBgImage)

//   const heroTextRef = useRef(null)
//   useEffect(() => {
//     animationMoveY(heroTextRef.current, true)
//   }, [])

//   return (
//     <StyledHero>
//       <BgImage
//         image={pluginImage}
//         preserveStackingContext
//         className="hero-image"
//       >
//         <StyledHeroText ref={heroTextRef}>
//           <h1>SelfMAX</h1>
//           <h2>Zadaszenia | Ogrody zimowe | Wiaty</h2>
//         </StyledHeroText>

//         <Link to="/products">
//           <StyledHeroBtn empty>Sprawdź ofertę</StyledHeroBtn>
//         </Link>
//       </BgImage>
//     </StyledHero>
//   )
// }

// export default HeroImage

// export const query = graphql`
//   {
//     heroBgImage: file(relativePath: { eq: "hero/hero-house.png" }) {
//       childImageSharp {
//         gatsbyImageData(
//           placeholder: BLURRED
//           transformOptions: { cropFocus: CENTER, fit: COVER }
//         )
//       }
//     }
//   }
// `
