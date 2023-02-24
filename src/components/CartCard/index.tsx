import React from "react";

import { useDispatch } from "react-redux";
import { IoTrash, IoAdd, IoRemove } from "react-icons/io5";

import { ProductT } from "@/shared/types/product.type";
import {
  decreaseProductQuantity,
  increaseProductQuantity,
  removeProductFromCart,
} from "@/store/cartSlice";
import { IconButton } from "@/components";
import { colors } from "@/styles/theme";
import {
  Container,
  CardImage,
  Title,
  Price,
  CardRow,
  CardBody,
  QuantityContainer,
  Quantity,
} from "./styles";

type CardT = {
  product: ProductT & { quantity: number };
  testId?: string;
};

const CartCard = ({ product, testId }: CardT) => {
  const dispatch = useDispatch();
  const handleIncreaseQuantitiy = () => {
    dispatch(increaseProductQuantity(product.id));
  };

  const handleDecreaseQuantitiy = () => {
    dispatch(decreaseProductQuantity(product.id));
  };

  const handleRemoveProduct = () => {
    dispatch(removeProductFromCart(product.id));
  };

  return (
    <Container
      data-test-id={testId}
      layout
      transition={{ layout: { duration: 1 } }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <CardImage alt="product img" src={product.image} />
      <CardBody>
        <CardRow>
          <Title>{product.name}</Title>
          <IconButton
            background={colors.white}
            color={colors.secondary}
            onClick={handleRemoveProduct}
            testId={`${testId}-remove`}
          >
            <IoTrash size={20} />
          </IconButton>
        </CardRow>
        <CardRow>
          <QuantityContainer>
            <IconButton
              background={colors.white}
              color={colors.secondary}
              onClick={handleDecreaseQuantitiy}
              testId={`${testId}-decrease`}
            >
              <IoRemove />
            </IconButton>
            <Quantity data-test-id={`${testId}-quantity`}>
              {product.quantity}
            </Quantity>
            <IconButton
              background={colors.white}
              color={colors.primary}
              onClick={handleIncreaseQuantitiy}
              testId={`${testId}-increase`}
            >
              <IoAdd />
            </IconButton>
          </QuantityContainer>

          <Price layout>
            $ {(product.price * product.quantity).toFixed(2)}
          </Price>
        </CardRow>
      </CardBody>
    </Container>
  );
};

export default CartCard;
