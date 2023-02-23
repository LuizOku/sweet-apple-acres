import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import {
  selectProductsInCart,
  totalCartPrice,
  setProductsInCart,
} from "@/store/cartSlice";
import {
  Container,
  Title,
  CardsContainer,
  CheckoutContainer,
  Total,
} from "./styles";
import { Button, CartCard, Input } from "@/components";
import { colors } from "@/styles/theme";
import { createOrder } from "@/api/orders";
import { useRouter } from "next/router";

const Cart = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const formRef = React.useRef() as React.MutableRefObject<HTMLFormElement>;
  const productsInCart = useSelector(selectProductsInCart);
  const totalPrice = useSelector(totalCartPrice);

  const handleOrder = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const items = productsInCart.map((pr) => ({
      productId: pr.id,
      quantity: pr.quantity,
    }));
    const obj = {
      name: formRef.current?.myName?.value,
      deliveryAddress: formRef.current?.deliveryAddress?.value,
      items,
    };
    try {
      const res = await createOrder(obj);
      if (res) {
        router.push("/");
        toast("Order sent successfully", {
          hideProgressBar: true,
          autoClose: 2000,
          type: "success",
        });
        dispatch(setProductsInCart([]));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container layout>
      <Title>Order the Products</Title>
      <CardsContainer layout>
        {productsInCart.map((pr) => (
          <CartCard key={pr.id} product={pr} />
        ))}
      </CardsContainer>
      <CheckoutContainer>
        <Total>Total: ${totalPrice.toFixed(2)}</Total>
        <form ref={formRef} onSubmit={(e) => handleOrder(e)}>
          <Input name="myName" placeholder="Name" />
          <Input name="deliveryAddress" placeholder="Address" />
          <Button
            type="submit"
            background={colors.primary}
            color={colors.white}
          >
            Order
          </Button>
        </form>
      </CheckoutContainer>
    </Container>
  );
};

export default Cart;
