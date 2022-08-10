import { Button } from "../";
import { storageData } from "../../utils/storageData";
import StorageCard from "../StorageCard";
import { viewMoreListingsButton } from "./locales";
import { GridContainer, MainContainer } from "./styled";

const StorageGrid = () => {
  return (
    <MainContainer>
      <GridContainer>
        {storageData.map((storage) => (
          <StorageCard data={storage} key={storage.id} />
        ))}
      </GridContainer>
      <Button
        background="secondary"
        color="primary"
        width="22.75rem"
        height="5rem"
      >
        {viewMoreListingsButton}
      </Button>
    </MainContainer>
  );
};

export default StorageGrid;
