import styled from "@emotion/styled";

type ButtonStylePropsT = {
  color: string;
  background: string;
  width?: string;
  height?: string;
  disabled?: boolean;
};

export const StyledButton = styled.button<ButtonStylePropsT>`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "40px"};
  border-radius: 4px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ color }) => color};
  background-color: ${({ background, disabled }) =>
    disabled ? "#B8B8B8" : background};
  margin: 5px;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  &:hover {
    opacity: ${({ disabled }) => (disabled ? 1 : 0.5)};
  }
`;
