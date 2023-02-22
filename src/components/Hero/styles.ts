import styled from "@emotion/styled";

export const Container = styled.section`
  width: 100vw;
  height: 600px;
  background: black;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-image: url("/crates.png");
  background-size: cover;
  padding: 100px 100px 0px 100px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 50px;
  margin-top: 10px;
`;

export const Subtitle = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  margin-top: 10px;
`;
