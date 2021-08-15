import styled from "styled-components"
import { Link } from "gatsby"

export const StyledProducts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;

  .lamele {
    &::after {
      content: "Lamele";
    }
  }
  .carporty {
    &::after {
      content: "Carporty";
    }
  }
  .ogrodyzimowe {
    &::after {
      content: "Ogrody zimowe";
    }
  }
  .zabudowa {
    &::after {
      content: "Zabudowa";
    }
  }

  .poliweglan {
    &::after {
      content: "Zadaszenia z poliwęglanu";
    }
  }
  .dachyrzymskie {
    &::after {
      content: "Dachy rzymskie";
    }
  }
`
export const StyledLink = styled(Link)`
  overflow: hidden;
  border-radius: 2%;
  box-shadow: ${({ theme }) => theme.shadows.shadow1};
  width: 100%;
  height: 350px;

  &:active {
    outline: 0.5px solid ${({ theme }) => theme.colors.lightGrey};
  }

  @media (min-width: 768px) {
    width: 48%;
  }
  @media (min-width: 992px) {
    width: 32.5%;
  }
`
export const StyledThumbnail = styled.div`
  position: relative;
  height: 400px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  transition: 0.4s ease-in-out;

  &:hover {
    .thumb-category {
      background-color: ${({ theme }) => theme.colors.black};
    }
  }

  @media (min-width: 768px) {
    &:hover {
      .thumb {
        transform: scale(1.1);
        filter: blur(2px);
      }
    }
  }

  .thumb {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    transition: 0.4s ease-in-out;
  }
`
export const StyledCategory = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem 2rem;
  width: 100%;
  text-align: center;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-shadow: ${({ theme }) => theme.shadows.shadow1};
  background-color: ${({ theme }) => theme.colors.textGrey};
  color: ${({ theme }) => theme.colors.lightGrey};
  transition: all 0.2s linear;

  @media (max-width: 992px) {
    font-size: 0.8rem;
  }
`
