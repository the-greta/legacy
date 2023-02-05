import React from "react";
import styled from "styled-components";

import CallToAction from "@/components/blocks/CallToAction";

const Footer = () => {
  return (
    <Container>
      <CallToAction />
      <Wrap>
        <div>footer</div>
        <div>desc</div>
      </Wrap>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
`;
const Wrap = styled.footer`
  background: blue;
`;
