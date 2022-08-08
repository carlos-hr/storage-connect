import StorageCard from "./StorageCard";
import { storageData } from "./StorageCard/storageData";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./styles.css";

const StorageCarousel = () => {
  return (
    <AliceCarousel
      responsive={{ 0: { items: 1 }, 768: { items: 2 }, 1480: { items: 3 } }}
      disableButtonsControls
      autoWidth
    >
      {storageData.map((storage) => (
        <StorageCard data={storage} key={storage.id} />
      ))}
    </AliceCarousel>
  );
};

export default StorageCarousel;
