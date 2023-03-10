import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Image from "next/image";

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
  NoResults,
} from "./styles";
import { Button, CartCard, Input } from "@/components";
import { colors } from "@/styles/theme";
import { useRouter } from "next/router";
import axios from "axios";

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
      const res = await axios.post("/api/orders", obj);
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
      toast("Error when trying to send order", {
        hideProgressBar: true,
        autoClose: 2000,
        type: "error",
      });
    }
  };

  return (
    <Container layout>
      <Title>Order the Products</Title>
      <CardsContainer layout>
        {productsInCart.length > 0 ? (
          productsInCart.map((pr, index) => (
            <CartCard testId={`cart-card-${index}`} key={pr.id} product={pr} />
          ))
        ) : (
          <div>
            <Image src="/Empty.png" alt="Search" width={475} height={360} />
            <NoResults>Cart is Empty</NoResults>
          </div>
        )}
      </CardsContainer>
      <CheckoutContainer>
        <Total>Total: ${totalPrice.toFixed(2)}</Total>
        {productsInCart.length > 0 && (
          <form
            ref={formRef}
            onSubmit={(e) => handleOrder(e)}
            data-test-id="checkout-form"
          >
            <Input name="myName" placeholder="Name" />
            <Input name="deliveryAddress" placeholder="Address" />
            <Button
              type="submit"
              background={colors.primary}
              color={colors.white}
              disabled={Boolean(productsInCart.length === 0)}
            >
              Order
            </Button>
          </form>
        )}
      </CheckoutContainer>
    </Container>
  );
};

export default Cart;
