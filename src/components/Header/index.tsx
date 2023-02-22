import React from "react";

import Link from "next/link";
import Image from "next/image";

import { Container } from "./styles";

const Header = ({ testId }: { testId?: string }) => {
  return (
    <Container data-testid={testId}>
      <Link href="/">
        <Image src="/Logo.png" alt="Logo" width={120} height={120} />
      </Link>
    </Container>
  );
};

export default Header;
