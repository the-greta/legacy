import React from "react";
import styled from "styled-components";

import AppLink from "@/components/atoms/AppLink";
import CallToAction from "@/components/blocks/CallToAction";

const Footer = () => {
  return (
    <Container>
      <CallToAction />
      <Wrap>
        <div>
          <b>© GRETA Inc. All right reserved</b>
        </div>
        <AppLink href="/">법적고지</AppLink>
        <AppLink href="/">개인정보처리방침</AppLink>
        <AppLink href="/">인재채용</AppLink>
      </Wrap>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  background: #091928;
  color: white;
`;
const Wrap = styled.footer`
  display: flex;
  gap: 2rem;
  max-width: 1024px;
  margin: 0 auto;
  padding: 3rem 0;
  color: lightgray;
`;
