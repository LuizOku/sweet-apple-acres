import Image from "next/image";
import React from "react";

import {
  Container,
  Title,
  Subtitle,
  TextContainer,
  ImageContainer,
} from "./styles";

const Hero = () => {
  return (
    <Container>
      <ImageContainer>
        <Image
          src="/Crates.png"
          fill
          alt="crates"
          style={{
            objectFit: "cover",
          }}
        />
      </ImageContainer>
      <TextContainer>
        <Title>Sweet Apple Acres</Title>
        <Subtitle>Here you can bulk order products from anywhere.</Subtitle>
      </TextContainer>
    </Container>
  );
};

export default Hero;
