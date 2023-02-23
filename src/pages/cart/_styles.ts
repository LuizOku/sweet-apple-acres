import { colors } from "@/styles/theme";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 200px;
  @media (max-width: 420px) {
    padding: 50px 20px;
  }
`;

export const Title = styled.h2`
  color: ${() => colors.dark};
  font-size: 35px;
  margin-bottom: 20px;
  text-align: center;
`;

export const CardsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const CheckoutContainer = styled.div`
  margin-top: 10px;
  padding: 10px;
  border-top: ${() => `1px solid ${colors.dark}`};
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 80%;
  @media (max-width: 420px) {
    width: 100%;
  }
`;

export const Total = styled.h4`
  color: ${() => colors.dark};
  font-size: 20px;
  margin-right: 5px;
`;

export const NoResults = styled.h3`
  color: ${() => colors.primary};
  font-size: 30px;
  line-height: 150%;
  text-align: center;
`;
