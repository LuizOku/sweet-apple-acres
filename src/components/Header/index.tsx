import React from "react";

import Image from "next/image";
import { useRouter } from "next/router";
import { IoCartOutline } from "react-icons/io5";

import { colors } from "@/styles/theme";
import IconButton from "../IconButton";
import { Container, Title, StyledLink } from "./styles";

const Header = () => {
  const router = useRouter();

  const handleNavigateToCart = () => router.push("/cart");

  return (
    <Container>
      <StyledLink data-test-id="header-logo-link" href="/">
        <Image src="/Logo.png" alt="Logo" width={100} height={100} />
        <Title>Sweet Apple Acres</Title>
      </StyledLink>
      <IconButton
        testId="cart-icon-button"
        background={colors.primary}
        color={colors.white}
        onClick={handleNavigateToCart}
      >
        <IoCartOutline size={30} />
      </IconButton>
    </Container>
  );
};

export default Header;
