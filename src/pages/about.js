import React, { useEffect, useRef } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { getImage, GatsbyImage, StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Button } from "../components/atoms/Button"
import Seo from "../components/Seo"
import { animationMoveX } from "../styles/Animations"

const StyledTopArticle = styled.article`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.lightGrey};
  margin-bottom: 1rem;
  padding-bottom: 1rem;

  img {
    min-width: 600px;
    max-height: 50vh;
    max-width: 100%;
  }

  @media (max-width: 992px) {
    flex-direction: column;
  }
`

const StyledBottomArticle = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;

  @media (max-width: 992px) {
    flex-direction: column;
  }

  img {
    max-width: 100%;
  }
`

const StyledText = styled.article`
  width: 45%;
  margin-left: ${({ top }) => (top ? "1.5rem" : "0")};
  margin-right: ${({ top }) => (top ? "0" : "1.5rem")};

  @media (max-width: 992px) {
    width: 100%;
    margin: 2rem 0;
  }

  p {
    margin: 0.8rem 0;
    line-height: 1.4;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.textGrey};
  }
`

const About = () => {
  const { file } = useStaticQuery(query)
  const aboutImg = getImage(file.childImageSharp)

  const sectionRef = useRef(null)
  useEffect(() => {
    animationMoveX(sectionRef.current, true)
  }, [])

  return (
    <>
      <Seo title="o nas" />
      <section ref={sectionRef}>
        <h2 className="section-title">O nas</h2>

        <StyledTopArticle>
          <GatsbyImage
            image={aboutImg}
            alt="Zadaszenie z poliwęglanu - realizacja"
          />
          <StyledText top>
            <p>
              Selfmax doskonali się w&nbsp;montażu zadaszeń aluminiowych od 2001
              roku. Ze względu na silny, a&nbsp;przede wszystkim szybki rozwój
              firmy, nasza centrala została przeniesiona do Loidesthal na północ
              od Wiednia. Nasz magazyn i&nbsp;powierzchnia wystawiennicza
              obecnie zajmują 5000 m².
            </p>
            <p>
              W Polsce nasze usługi są dostępne od 2020 roku. Podobnie jak to ma
              miejsce w&nbsp;Austrii - naszą misją jest dostarczanie klientom
              produktów i&nbsp;usług o&nbsp;bezkompromisowej jakości.
            </p>
          </StyledText>
        </StyledTopArticle>
        <StyledBottomArticle>
          <StaticImage
            src="../assets/hero/hero-flip-blurred.jpg"
            alt="Ogród zimowy"
          />
          <StyledText>
            <p>
              Specjalizujemy się w&nbsp;zadaszeniach z&nbsp;aluminium
              i&nbsp;jest to jedyny materiał, który stosujemy do budowy
              konstrukcji. Kierujemy się zasadą estetyki i&nbsp;trwałości, co
              szczególnie cenią sobie klienci, podejmujący z&nbsp;nami
              współpracę.
            </p>
            <p>
              Udzielamy <strong>10-letniej gwarancji</strong> na elementy
              konstrukcyjne oraz <strong>5-&nbsp;letniej gwarancji</strong> na
              elementy elektroniczne/ automatykę.
            </p>
            <p>
              Nie konkurujemy cenami, dlatego jeśli szukasz najtańszego produktu
              to tutaj go nie znajdziesz. Po prostu, na jakości nie da się
              zaoszczędzić – przekonasz się o&nbsp;tym z&nbsp;biegiem lat,
              obserwując swój dach pod naporem śniegu lub targany porywistym
              wiatrem. Usługi wykonujemy kompleksowo, przygotowujemy podłoże,
              montujemy zadaszenie zgodnie z&nbsp;ustaleniami
              i&nbsp;doprowadzamy taras do stanu sprzed montażu.
            </p>
            <p>
              Jesteśmy otwarci na niestandardowe potrzeby klienta, jak również
              możemy dostarczyć materiały do samodzielnego montażu zadaszenia
              wraz z&nbsp;instruktażem.
            </p>

            <Link to="/products">
              <Button empty role="button">
                Oferta
              </Button>
            </Link>
          </StyledText>
        </StyledBottomArticle>
      </section>
    </>
  )
}

export default About

export const query = graphql`
  {
    file(relativeDirectory: { eq: "about" }) {
      childImageSharp {
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
`
