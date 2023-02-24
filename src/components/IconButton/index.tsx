import React from "react";

import { StyledIconButton } from "./styles";

type IconButtonT = {
  color: string;
  background: string;
  children: JSX.Element;
  onClick: () => void;
  testId?: string;
};

const IconButton = ({
  color,
  background,
  children,
  onClick,
  testId,
}: IconButtonT) => {
  return (
    <StyledIconButton
      data-test-id={testId}
      color={color}
      background={background}
      onClick={onClick}
    >
      {children}
    </StyledIconButton>
  );
};

export default IconButton;
