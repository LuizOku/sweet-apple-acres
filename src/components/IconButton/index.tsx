import React from "react";

import { StyledIconButton } from "./styles";

type IconButtonT = {
  color: string;
  background: string;
  children: JSX.Element;
  onClick: () => void;
};

const IconButton = ({ color, background, children, onClick }: IconButtonT) => {
  return (
    <StyledIconButton color={color} background={background} onClick={onClick}>
      {children}
    </StyledIconButton>
  );
};

export default IconButton;
