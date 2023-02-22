import React from "react";

import Link from "next/link";
import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";

import { Container, Title, StyledLink } from "./styles";
import IconButton from "../IconButton";
import { useTheme } from "@emotion/react";

const Header = ({ testId }: { testId?: string }) => {
  const theme = useTheme();

  const handleNavigateToCart = () => {
    console.log("cart");
  };

  return (
    <Container data-testid={testId}>
      <StyledLink href="/">
        <Image src="/Logo.png" alt="Logo" width={120} height={120} />
        <Title>Sweet Apple Acres</Title>
      </StyledLink>
      <IconButton
        background={theme.colors.primary}
        color={theme.colors.white}
        onClick={handleNavigateToCart}
      >
        <IoCartOutline size={30} />
      </IconButton>
    </Container>
  );
};

export default Header;
