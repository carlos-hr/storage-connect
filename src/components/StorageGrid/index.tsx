import React from "react";
import { storageData } from "../../utils/storageData";
import Button from "../common/Button";
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
