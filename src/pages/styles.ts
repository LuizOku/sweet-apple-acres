import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const CardsContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 50px 200px;
  @media (max-width: 420px) {
    padding: 50px;
  }
`;