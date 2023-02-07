import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

import AppLink from "@/components/atoms/AppLink";

import gretaLogoWhite from "../../../public/image/LOGO_WHITE.png";

const Footer = () => {
  return (
    <Container>
      <Nav>
        <Link href="/">
          <Image
            src={gretaLogoWhite}
            alt="Greta Logo"
            width={120}
            height={45}
            unoptimized={true}
            priority
          />
        </Link>
        <NavSection>
          <AppLink href="/">회사소개</AppLink>
          <AppLink href="/">합성/재현데이터</AppLink>
          <AppLink href="/">인재채용</AppLink>
        </NavSection>
        <div />
      </Nav>
      <Wrap>
        <div />
        <Copyright>© GRETA Inc. — All rights reserved</Copyright>
        <AppLink href="/">개인정보처리방침</AppLink>
        <AppLink href="/">법적고지</AppLink>
      </Wrap>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  width: 100%;
  position: absolute;
  bottom: 0;
  background: black;
  font-size: 0.75rem;
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 0 2.5rem;
  margin: auto;
  height: 100%;
  max-width: 1024px;
  color: white;
`;
const NavSection = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: end;
`;
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1.5rem 0;
  border-top: 0.5px solid lightgray;
  color: white;
  opacity: 0.7;
`;
const Copyright = styled.span``;
