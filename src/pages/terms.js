import React from "react"
import styled from "styled-components"

const StyledText = styled.article`
  width: 50vw;
  margin: 2rem auto;

  @media (max-width: 768px) {
    width: 90vw;
  }

  h2 {
    margin-bottom: 2rem;
  }
  p {
    margin: 0.8rem 0;
    line-height: 1.4;
    color: ${({ theme }) => theme.colors.textGrey};
  }
`

const terms = () => {
  return (
    <StyledText>
      <h2 className="section-title">Polityka prywatności</h2>
      <p>
        Niniejsza Polityka Prywatności dotyczy strony: – www.selfmax.pl.
        Właściciel serwisu dokłada wszelkich starań, aby Państwa prywatność była
        odpowiednio chroniona. W celu realizacji zgodnego z prawem,
        przejrzystego i bezpiecznego przetwarzania Państwa danych osobowych
        przyjmujemy niniejszą Politykę Prywatności, która odwołuje się do RODO,
        czyli Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z
        dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z
        przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich
        danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o
        ochronie danych). Dokument określa jakie dane i na jakich zasadach
        przetwarzamy i jak dbamy o ich bezpieczeństwo i Państwa prawa.
        Administratorem Państwa danych osobowych jest firma Selfmax. z siedzibą
        przy ul. ..... ; NIP: .....; Regon: ..........; KRS: ......
      </p>
    </StyledText>
  )
}

export default terms
