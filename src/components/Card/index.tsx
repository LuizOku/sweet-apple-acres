import { ProductT } from "@/shared/types/product.type";
import { addProductToCart } from "@/store/cartSlice";
import { colors } from "@/styles/theme";
import React from "react";
import {
  IoStar,
  IoCheckmarkCircleOutline,
  IoCloseCircleOutline,
} from "react-icons/io5";
import { useDispatch } from "react-redux";
import Button from "../Button";

import {
  Container,
  CardImage,
  Title,
  BasicInfo,
  Info,
  Description,
  AnimatedContainer,
  IconTextContent,
} from "./styles";

type CardT = {
  product: ProductT;
};

const Card = ({ product }: CardT) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dispatch = useDispatch();
  const handleAddToCart = (product: ProductT) => {
    dispatch(addProductToCart(product));
  };
  return (
    <Container
      layout
      transition={{ layout: { duration: 1, type: "spring" } }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ borderRadius: "4px" }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <CardImage alt="product img" src={product.image} layout />
      <Title>{product.name}</Title>
      {isOpen && (
        <AnimatedContainer
          layout
          transition={{ layout: { duration: 1 } }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Description>{product.description}</Description>
        </AnimatedContainer>
      )}
      <BasicInfo>
        <Info>$ {product.price}</Info>
        {product.isAvailable ? (
          <IconTextContent>
            <IoCheckmarkCircleOutline style={{ marginRight: "5px" }} />
            <Info>Available</Info>
          </IconTextContent>
        ) : (
          <IconTextContent>
            <IoCloseCircleOutline style={{ marginRight: "5px" }} />
            <Info>Unavailable</Info>
          </IconTextContent>
        )}
        <IconTextContent>
          <Info>{product.rating}</Info>
          <IoStar style={{ marginLeft: "5px" }} />
        </IconTextContent>
      </BasicInfo>

      {isOpen && (
        <AnimatedContainer
          layout
          transition={{ layout: { duration: 1 } }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Button
            background={colors.primary}
            color={colors.white}
            width="260px"
            height="30px"
            onClick={(e: React.MouseEvent<Element, MouseEvent>) => {
              e.stopPropagation();
              handleAddToCart(product);
            }}
          >
            Add to Cart
          </Button>
        </AnimatedContainer>
      )}
    </Container>
  );
};

export default Card;
