import React from "react";

import { StyledButton } from "./styles";

type ButtonT = {
  color: string;
  background: string;
  width?: string;
  children: JSX.Element | string;
  onClick: () => void;
};

const Button = ({ color, background, width, children, onClick }: ButtonT) => {
  return (
    <StyledButton
      color={color}
      background={background}
      width={width}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
