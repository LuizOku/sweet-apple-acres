import styled from "@emotion/styled";

type ButtonStylePropsT = {
  color: string;
  background: string;
  width?: string;
};

export const StyledButton = styled.button<ButtonStylePropsT>`
  width: ${({ width }) => width || "100%"};
  height: 40px;
  border-radius: 4px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ color }) => color};
  background-color: ${({ background }) => background};
  margin: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;
