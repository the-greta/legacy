import React from "react";
import styled from "styled-components";

import AppLink from "@/components/atoms/AppLink";

const Footer = () => {
  return (
    <Container>
      <Wrap>
        <div>
          <b>© GRETA Inc. All right reserved</b>
        </div>
        <AppLink href="/">법적고지</AppLink>
        <AppLink href="/">개인정보처리방침</AppLink>
        <AppLink href="/contact">문의상담</AppLink>
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
  padding: 3rem 2rem;
  color: lightgray;
  font-size: 0.75rem;
`;
