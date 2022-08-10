import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  > button {
    margin: 5rem 0;
    @media (max-width: 375px) {
      max-width: calc(100% - 2.5rem);
    }
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.125rem;
  padding-top: 5.5625rem;
  margin: auto;
  width: fit-content;

  @media (min-width: 1260px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
