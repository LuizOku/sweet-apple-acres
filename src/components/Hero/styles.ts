import styled from "@emotion/styled";

import { colors } from "@/styles/theme";

export const Container = styled.section`
  position: relative;
  width: 100vw;
  height: 500px;
  background: black;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-attachment: fixed;
  padding: 100px 100px 0px 100px;
`;

export const Title = styled.h1`
  color: ${() => colors.white};
  font-size: 50px;
  margin-top: 10px;
  z-index: 10;
  position: relative;
`;

export const Subtitle = styled.h3`
  color: ${() => colors.white};
  font-size: 20px;
  margin-top: 10px;
  z-index: 10;
  position: relative;
`;
