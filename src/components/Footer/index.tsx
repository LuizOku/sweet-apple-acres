import React from "react";

import Link from "next/link";
import Image from "next/image";
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoLinkedin,
} from "react-icons/io5";

import { Container, IconsContainer } from "./styles";
import IconButton from "../IconButton";
import { colors } from "@/styles/theme";

const Footer = ({ testId }: { testId?: string }) => {
  return (
    <Container data-testid={testId}>
      <Link href="/">
        <Image src="/DarkLogo.png" alt="Logo" width={150} height={150} />
      </Link>
      <IconsContainer>
        <IconButton
          background={colors.darkText}
          color={colors.white}
          onClick={() => console.log("instagram")}
        >
          <IoLogoInstagram size={20} />
        </IconButton>
        <IconButton
          background={colors.darkText}
          color={colors.white}
          onClick={() => console.log("facebook")}
        >
          <IoLogoFacebook size={20} />
        </IconButton>
        <IconButton
          background={colors.darkText}
          color={colors.white}
          onClick={() => console.log("linkedin")}
        >
          <IoLogoLinkedin size={20} />
        </IconButton>
      </IconsContainer>
    </Container>
  );
};

export default Footer;
