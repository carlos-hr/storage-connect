import { Card, DetailsContainer } from "./styled";
import { FiMapPin } from "react-icons/fi";
import { BiBuildingHouse } from "react-icons/bi";
import { BsPeople, BsFullscreen } from "react-icons/bs";
import Button from "../common/Button";
import {
  occupancyText,
  sizeText,
  totalUnitsText,
  viewDetailsButton,
} from "../StorageCarousel/locales";

interface StorageCardProps {
  data: {
    location: string;
    totalUnits: number;
    occupancy: string;
    size: string;
    img: string;
  };
}

const StorageCard = ({ data }: StorageCardProps) => {
  const { location, totalUnits, occupancy, size, img } = data;

  return (
    <Card>
      <img src={img} alt={`storage in ${location}`} />

      <DetailsContainer>
        <span>
          <FiMapPin /> <h3>{location}</h3>
        </span>
        <span>
          <BiBuildingHouse />
          {totalUnitsText}
          <p>{totalUnits}</p>
        </span>
        <span>
          <BsPeople />
          {occupancyText}
          <p>{occupancy}</p>
        </span>
        <span>
          <BsFullscreen />
          {sizeText}
          <p>{size}</p>
        </span>

        <Button height="3.125rem" width="17.375rem" color="white">
          {viewDetailsButton}
        </Button>
      </DetailsContainer>
    </Card>
  );
};

export default StorageCard;
