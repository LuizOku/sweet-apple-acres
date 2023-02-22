import styled from "@emotion/styled";

type IconButtonStylePropsT = {
  color: string;
  background: string;
};

export const StyledIconButton = styled.button<IconButtonStylePropsT>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ color }) => color};
  background-color: ${({ background }) => background};
  &:hover {
    opacity: 0.5;
  }
`;
