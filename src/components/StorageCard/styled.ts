import styled from "styled-components";

export const Card = styled.div`
  width: 24.92rem;
  background: ${(props) => props.theme.cardBackground};
  border-radius: 10px;
  padding: 1rem 1rem;
  color: ${(props) => props.theme.heading};

  img {
    overflow: hidden;
    width: 100%;
  }

  @media (max-width: 375px) {
    max-width: calc(100% - 2.5rem);
    margin: auto;
  }
`;

export const DetailsContainer = styled.div`
  padding-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.9375rem;
  font-family: "Poppins";
  justify-content: center;

  span {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    line-height: 1.25rem;
    font-size: 1.125rem;
    font-weight: 500;

    h3 {
      font-size: 1.24rem;
      font-weight: 600;
    }

    p {
      font-weight: 400;
    }
  }

  button {
    align-self: center;
    margin-top: 1.75rem;
  }
`;
