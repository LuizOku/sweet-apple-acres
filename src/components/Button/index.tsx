import React from "react";

import { StyledButton } from "./styles";

type ButtonT = {
  color: string;
  background: string;
  width?: string;
  height?: string;
  children: JSX.Element | string;
  onClick?: (e: React.MouseEvent<Element, MouseEvent>) => void;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  testId?: string;
};

const Button = ({
  color,
  background,
  width = "100%",
  height = "40px",
  children,
  onClick = () => {},
  type = "button",
  disabled = false,
  testId,
}: ButtonT) => {
  return (
    <StyledButton
      data-test-id={testId}
      color={color}
      background={background}
      width={width}
      height={height}
      onClick={(e: React.MouseEvent<Element, MouseEvent>) => onClick(e)}
      type={type}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
