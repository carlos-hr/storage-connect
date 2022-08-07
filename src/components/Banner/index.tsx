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
        <p>{bannerTitle}</p>
        <p>{bannerSubtitle}</p>
      </BannerTextContainer>
      <ButtonsContainer>
        <Button
          text={firstButton}
          background="secondary"
          width="15.6875rem"
          height="3.75rem"
        />
        <Button
          text={secondButton}
          background="white"
          width="15.6875rem"
          height="3.75rem"
        />
      </ButtonsContainer>
    </BannerContainer>
  );
};

export default Banner;
