import Image from "next/image";
import React from "react";
import styled from "styled-components";

import bg from "../../../public/image/bg.jpg";

const Heading = (props) => {
  return (
    <Container>
      <Image
        src={bg}
        sizes="100vw"
        fill
        placeholder="blur"
        style={{ objectFit: "cover", zIndex: -1, filter: "brightness(0.5)" }}
      />
      <h1 style={{ marginBottom: 0 }}>{props.heading.title}</h1>
      <div>{props.heading.subtitle}</div>
    </Container>
  );
};

export default Heading;

const Container = styled.div`
  width: 100%;
  height: fit-content;
  padding: 2rem 0 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  color: lightgray;
`;
