import styled from "@emotion/styled";

import { colors } from "@/styles/theme";

export const Title = styled.h2`
  color: ${() => colors.dark};
  font-size: 35px;
  margin-bottom: 20px;
  text-align: center;
`;

export const Form = styled.form`
  width: 100%;
`;

export const FilterContainer = styled.div`
  background-color: ${() => colors.white};
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 250px 0px;
  @media (max-width: 420px) {
    padding: 50px 50px 0px;
  }
  section {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
