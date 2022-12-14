import styled from "styled-components";

interface BaseButtonProps {
  background: keyof typeof BUTTON_COLORS;
  color?: keyof typeof BUTTON_COLORS;
  height: string;
  width: string;
}

const BUTTON_COLORS = {
  white: "white",
  primary: "primary",
  secondary: "secondary",
} as const;

export const BaseButton = styled.button<BaseButtonProps>`
  width: ${(props) => props.width};
  max-width: 100%;
  height: ${(props) => props.height};
  border-radius: 10px;
  background: ${(props) => props.theme[BUTTON_COLORS[props.background]]};
  color: ${(props) => props.color};
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
