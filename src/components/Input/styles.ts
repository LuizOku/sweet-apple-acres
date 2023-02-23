import styled from "@emotion/styled";

type InputStylePropsT = {
  hasError: boolean;
  width?: string;
};

export const StyledInput = styled.input<InputStylePropsT>`
  height: 40px;
  width: ${({ width }) => width || "100%"};
  border-radius: 4px;
  padding-left: 8px;
  margin: ${({ hasError }) => (hasError ? "5px 5px 0" : "5px")};
  border: ${({ hasError }) =>
    hasError ? "2px solid #D50000" : "1px solid rgb(204, 204, 204)"};
`;

export const ErrorSpan = styled.span`
  color: #d50000;
  align-self: flex-start;
  font-size: 10px;
  margin-top: 2px !important;
`;
