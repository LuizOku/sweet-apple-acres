import React from "react";

import { Container, Title, Subtitle } from "./styles";

const Hero = ({ testId }: { testId?: string }) => {
  return (
    <Container data-testid={testId}>
      <section>
        <Title>Sweet Apple Acres</Title>
        <Subtitle>Here you can bulk order products from anywhere. </Subtitle>
      </section>
    </Container>
  );
};

export default Hero;
