import styled from "styled-components";
import banner from "../../assets/banner.png";

export const BannerContainer = styled.main`
  height: 38.0625rem;
  width: 100%;
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  z-index: -1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BannerTextContainer = styled.div`
  color: ${(props) => props.theme.white};
  font-family: "Poppins";
  width: 42.25rem;
  text-align: center;
  max-width: 90%;
  margin-top: 1rem;

  h1 {
    font-weight: 800;
    font-size: 3.75rem;
    line-height: 1.25;

    @media (max-width: 480px) {
      font-size: 3rem;
    }
  }

  p {
    font-weight: 500;
    font-size: 1.25rem;
    padding-top: 0.625rem;
    line-height: 1.65;
  }
`;

export const ButtonsContainer = styled.div`
  margin-top: 3.25rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 32.625rem;
  max-width: 90%;

  @media (max-width: 480px) {
    button {
      max-width: 45%;
    }
  } ;
`;
