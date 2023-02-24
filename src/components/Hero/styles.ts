import styled from "@emotion/styled";

import { colors } from "@/styles/theme";

export const Container = styled.section`
  width: 100vw;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  z-index: -1;
  position: fixed;
  width: 100vw;
  height: 500px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
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
