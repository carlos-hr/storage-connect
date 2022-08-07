import Button from "../common/Button";
import { bannerSubtitle, bannerTitle } from "./locales";
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
          text="Sell Your Self Storage"
          background="secondary"
          width="15.6875rem"
          height="3.75rem"
        />
        <Button
          text="Active Self Storage Listings"
          background="white"
          width="15.6875rem"
          height="3.75rem"
        />
      </ButtonsContainer>
    </BannerContainer>
  );
};

export default Banner;
