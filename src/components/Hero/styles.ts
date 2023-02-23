import { colors } from "@/styles/theme";
import styled from "@emotion/styled";

export const Container = styled.section`
  width: 100vw;
  height: 500px;
  background: black;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-image: url("https://i.imgur.com/wWojP1K.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 100px 100px 0px 100px;
`;

export const Title = styled.h1`
  color: ${() => colors.white};
  font-size: 50px;
  margin-top: 10px;
`;

export const Subtitle = styled.h3`
  color: ${() => colors.white};
  font-size: 20px;
  margin-top: 10px;
`;
