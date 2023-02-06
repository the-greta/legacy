import Image from "next/image";
import React from "react";
import styled from "styled-components";

import bg from "../../../public/image/bg.jpg";

const Header2 = () => {
  return (
    <Container>
      <Wrap>
        <Image
          src={bg}
          sizes="100vw"
          fill
          placeholder="blur"
          style={{ objectFit: "cover", zIndex: -1, filter: "brightness(0.7)" }}
        />
      </Wrap>
      <h1 style={{ marginBottom: 0 }}>title</h1>
      <div>props.heading.subtitle</div>
    </Container>
  );
};

export default Header2;

const Container = styled.div`
  width: 100%;
  height: 667px;
  padding: 2rem 0 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  color: lightgray;
`;
const Wrap = styled.span`
  height: 923px;
  overflow: hidden;
`;
