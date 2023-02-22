import styled from "@emotion/styled";
import Link from "next/link";

export const Container = styled.header`
  width: 100vw;
  height: 130px;
  box-shadow: -2px 2px 10px 0 rgb(207 212 214 / 50%);
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  z-index: 100;
  padding: 0 50px;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.darkText};
  font-size: 20px;
  text-transform: uppercase;
`;
