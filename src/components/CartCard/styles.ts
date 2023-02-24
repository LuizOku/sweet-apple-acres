import { motion } from "framer-motion";
import styled from "@emotion/styled";

import { colors } from "@/styles/theme";

export const Container = styled(motion.div)`
  background: ${() => colors.white};
  display: flex;
  margin: 10px;
  border: 1px solid #ececec;
  width: 80%;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  @media (max-width: 420px) {
    width: 100%;
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

export const CardImage = styled.img`
  height: 150px;
  object-fit: cover;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  margin-right: 10px;
  @media (max-width: 420px) {
    height: 120px;
    width: 120px;
  }
`;

export const Title = styled.h4`
  color: ${() => colors.primary};
  font-size: 20px;
  line-height: 150%;
  margin-left: 15px;
`;

export const Price = styled(motion.span)`
  color: ${() => colors.dark};
  text-align: right;
  margin: 15px;
`;

export const Quantity = styled.span`
  color: ${() => colors.dark};
  text-align: center;
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
`;
