import { ReactNode } from "react";
import { BaseButton } from "./styled";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  background?: "primary" | "secondary" | "white";
  color?: "primary" | "secondary" | "white";
  height?: string;
  width?: string;
}

const Button = (props: ButtonProps) => {
  const {
    children,
    background = "primary",
    color = "primary",
    width = "12.4375rem",
    height = "3.4375rem",
  } = props;
  return (
    <BaseButton
      background={background}
      color={color}
      height={height}
      width={width}
    >
      {children}
    </BaseButton>
  );
};

export default Button;
