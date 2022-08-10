import styled from "styled-components";
import rectangleLeft from "../../../assets/rectangle-left.svg";
import rectangleRight from "../../../assets/rectangle-right.svg";

export const FooterContainer = styled.footer`
  height: 24.75rem;
  overflow: hidden;
  font-family: "Roboto";

  h3 {
    font-family: "Inter";
    font-weight: 700;
    font-size: 1.375rem;
    line-height: 1.375;
  }

  h4 {
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.318;
  }

  a,
  p {
    font-size: 1rem;
    text-decoration: none;
    line-height: 1.5;
    font-weight: 400;
  }

  @media (max-width: 1260px) {
    height: fit-content;
  }
`;

export const FooterContent = styled.div`
  height: 22.5rem;
  margin: 6.25rem 1.5rem;
  margin-bottom: 0;
  background-image: url(${rectangleLeft}), url(${rectangleRight});
  background-position: bottom left, bottom right;
  background-repeat: no-repeat;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  column-gap: 6rem;
  row-gap: 1.5rem;
  padding-top: 3.25rem;

  @media (max-width: 580px) {
    background-image: url(${rectangleLeft});
    background-position: bottom center;
  }

  @media (max-width: 1260px) {
    height: fit-content;
  }
`;

const BaseMenuItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 11.5625rem;

  @media (max-width: 545px) {
    padding-bottom: 1rem;
    border-bottom: 1px solid lightgray;
  }
`;

export const SummaryContainer = styled(BaseMenuItem)`
  svg path {
    fill: ${(props) => props.theme.primary};
  }

  > div {
    display: flex;
    align-items: center;
    gap: 0.625rem;
  }
`;

export const LinksContainer = styled(BaseMenuItem)``;

export const NewsletterContainer = styled(BaseMenuItem)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  input {
    width: 15.625rem;
    height: 2.40625rem;
    border: 1px solid #e8efff;
    border-radius: 10px;
    ::-webkit-input-placeholder {
      color: ${(props) => props.theme.heading};
      font-size: 0.75rem;
      font-family: "Poppins";
      font-weight: 400;
      padding: 1rem 1.625rem;
    }
  }
`;

export const SocialMediaContainer = styled(BaseMenuItem)`
  > div {
    display: flex;
    width: 12.75rem;
    justify-content: space-between;
  }

  select {
    width: 13.1875rem;
    height: 2.40625rem;
    border-radius: 10px;
  }

  label {
    position: absolute;
    height: 2.40625rem;
    font-weight: 500;
    font-size: 1.125rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding-left: 0.5rem;
  }
`;

export const SocialMediaIcon = styled.a`
  width: 2.34375rem;
  height: 2.34375rem;
  background-color: ${(props) => props.theme.primary};
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;

  :hover {
    opacity: 0.8;
  }

  svg path {
    fill: ${(props) => props.theme.white};
  }
`;
