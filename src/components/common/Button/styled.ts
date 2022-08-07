import styled from "styled-components";

interface BaseButtonProps {
  background?: string;
  color?: string;
  height: string;
  width: string;
}

export const BaseButton = styled.button<BaseButtonProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 10px;
  background: ${(props) => props.theme.secondary};
  color: "#021850";
  font-family: "Poppins";
  font-weight: 500;
  font-size: 1rem;
  border: 0;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;
