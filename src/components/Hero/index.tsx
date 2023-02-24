import Image from "next/image";
import React from "react";

import { Container, Title, Subtitle } from "./styles";

const Hero = () => {
  return (
    <Container>
      <Image
        src="/Crates.png"
        fill
        alt="crates"
        style={{
          objectFit: "cover",
          objectPosition: "center",
          zIndex: 0,
          backgroundAttachment: "fixed",
        }}
      />
      <section>
        <Title>Sweet Apple Acres</Title>
        <Subtitle>Here you can bulk order products from anywhere.</Subtitle>
      </section>
    </Container>
  );
};

export default Hero;
