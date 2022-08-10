import { Banner, StorageCarousel, StorageGrid } from "../../components";
import { sessionTitle, sessionSubtitle, gridTitle } from "./locales";
import {
  FillElement,
  CarouselContainer,
  CarouselTextContainer,
  StorageGridContainer,
  GridHeading,
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

      <StorageGridContainer>
        <GridHeading>
          <h3>{gridTitle}</h3>
          <p>{sessionSubtitle}</p>
        </GridHeading>
        <StorageGrid />
      </StorageGridContainer>
    </>
  );
};

export default Home;
