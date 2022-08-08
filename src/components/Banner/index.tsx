import Button from "../common/Button";
import {
  bannerSubtitle,
  bannerTitle,
  firstButton,
  secondButton,
} from "./locales";
import {
  BannerContainer,
  BannerTextContainer,
  ButtonsContainer,
} from "./styed";

const Banner = () => {
  return (
    <BannerContainer>
      <BannerTextContainer>
        <h1>{bannerTitle}</h1>
        <p>{bannerSubtitle}</p>
      </BannerTextContainer>
      <ButtonsContainer>
        <Button background="secondary" width="15.6875rem" height="3.75rem">
          {firstButton}
        </Button>
        <Button background="white" width="15.6875rem" height="3.75rem">
          {secondButton}
        </Button>
      </ButtonsContainer>
    </BannerContainer>
  );
};

export default Banner;
