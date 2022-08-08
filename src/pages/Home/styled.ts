import styled from "styled-components";
import elipse from "../../assets/elipse-bg.svg";

export const FillElement = styled.div`
  height: 21.375rem;
`;

export const CarouselContainer = styled.div`
  background-image: url(${elipse});
  background-repeat: no-repeat;
  background-position-y: -10.6875rem;
  height: 61.25rem;
  margin-top: 10.6875rem;
  background-color: ${(props) => props.theme.white};
  padding: 6.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.25rem;

  @media (max-width: 480px) {
    padding-right: 1rem;
    padding-left: 1rem;
  }
`;

export const CarouselTextContainer = styled.div`
  text-align: center;
  font-family: "Poppins";
  line-height: 1.875rem;
  width: 48.0625rem;
  max-width: 100%;

  h1 {
    font-size: 2.1875rem;
    font-weight: 600;
  }

  p {
    font-size: 1.125rem;
    font-weight: 400;
    padding-top: 1.25rem;
  }
`;
