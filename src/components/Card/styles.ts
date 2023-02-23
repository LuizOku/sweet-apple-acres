import { motion } from "framer-motion";
import { colors } from "@/styles/theme";
import styled from "@emotion/styled";

export const Container = styled(motion.div)`
  background: ${() => colors.white};
  display: flex;
  flex-direction: column;
  margin: 10px;
  border: 1px solid #ececec;
  width: 300px;
  cursor: pointer;
`;

export const CardImage = styled(motion.img)`
  height: 250px;
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const Title = styled(motion.h4)`
  color: ${() => colors.primary};
  font-size: 20px;
  line-height: 150%;
  padding: 5px 10px;
`;

export const Description = styled.span`
  color: ${() => colors.darkText};
`;

export const AnimatedContainer = styled(motion.div)`
  padding: 5px 10px;
`;

export const BasicInfo = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
`;

export const Info = styled.span`
  color: ${() => colors.darkText};
  line-height: 150%;
`;

export const IconTextContent = styled.div`
  display: flex;
  align-items: center;
`;