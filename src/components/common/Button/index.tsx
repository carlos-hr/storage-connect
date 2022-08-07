import { BaseButton } from "./styled";

interface ButtonProps {
  text: string;
  background?: "primary" | "secondary";
  color?: string;
  height?: string;
  width?: string;
}

const Button = (props: ButtonProps) => {
  const {
    text,
    background = "primary",
    color = "white",
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
      {text}
    </BaseButton>
  );
};

export default Button;
