import { Banner, StorageCarousel } from "../../components";
import { sessionSubtitle, sessionTitle } from "./locales";
import {
  FillElement,
  CarouselContainer,
  CarouselTextContainer,
} from "./styled";

const Home = () => {
  return (
    <>
      <Banner />
      <FillElement />
      <CarouselContainer>
        <CarouselTextContainer>
          <h1>{sessionTitle}</h1>
          <p>{sessionSubtitle}</p>
        </CarouselTextContainer>
        <StorageCarousel />
      </CarouselContainer>
    </>
  );
};

export default Home;
