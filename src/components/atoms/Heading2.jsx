import Image from "next/image";
import React from "react";
import styled from "styled-components";

import bg from "../../../public/image/bg.jpg";

const Heading2 = (props) => {
  return (
    <Container>
      <Image
        src={bg}
        sizes="100vw"
        fill
        placeholder="blur"
        style={{ objectFit: "cover", zIndex: -1, filter: "brightness(0.7)" }}
      />
      <div style={{ width: "85%", marginLeft: "auto" }}>
        <h1 style={{ marginBottom: 0 }}>dfsfasd</h1>
        <div>dfsfasd</div>
      </div>
    </Container>
  );
};

export default Heading2;

const Container = styled.div`
  width: 100%;
  margin: 0 calc(50% - 50vw);
  padding: 0 calc(50vw - 50%);
  height: 933px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  position: relative;
  color: lightgray;
`;
