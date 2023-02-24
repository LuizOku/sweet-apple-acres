import styled from "@emotion/styled";
import Link from "next/link";

import { colors } from "@/styles/theme";

export const Container = styled.header`
  width: 100vw;
  height: 100px;
  box-shadow: -2px 2px 10px 0 rgb(207 212 214 / 50%);
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  z-index: 100;
  padding: 0 50px 0 20px;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const Title = styled.h4`
  color: ${() => colors.secondary};
  font-size: 18px;
  text-transform: uppercase;
  margin-left: -10px;
`;
