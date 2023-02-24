import styled from "@emotion/styled";
import { motion } from "framer-motion";

import { colors } from "@/styles/theme";

export const CardsContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 50px 200px;
  background-color: ${() => colors.white};
  z-index: 1;
  @media (max-width: 420px) {
    padding: 50px;
  }
`;

export const NoResults = styled.h3`
  color: ${() => colors.primary};
  font-size: 30px;
  line-height: 150%;
  text-align: center;
`;
