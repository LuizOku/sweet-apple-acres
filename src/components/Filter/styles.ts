import { colors } from "@/styles/theme";
import styled from "@emotion/styled";

export const Title = styled.h2`
  color: ${() => colors.darkText};
  font-size: 35px;
  margin-bottom: 20px;
  text-align: center;
`;

export const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify: center;
  background-color: #ececec;
  padding: 50px 200px;
  @media (max-width: 420px) {
    padding: 50px;
  }
  section {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
