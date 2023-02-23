import { colors } from "@/styles/theme";
import styled from "@emotion/styled";

export const Container = styled.header`
  width: 100vw;
  height: 250px;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${() => colors.dark};
  z-index: 100;
  flex-direction: column;
`;

export const IconsContainer = styled.header`
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
