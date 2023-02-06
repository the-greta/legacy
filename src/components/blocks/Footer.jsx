import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

import AppLink from "@/components/atoms/AppLink";

import gretaLogoWhite from "../../../public/image/LOGO_WHITE.png";
import CallToAction from "./CallToAction";

const Footer = () => {
  return (
    <Container>
      <CallToAction />
      <Wrap>
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
        <Nav>
          <NavContent>
            <AppLink href="/">회사소개</AppLink>
            <AppLink href="/">합성/재현데이터</AppLink>
            <AppLink href="/">인재채용</AppLink>
          </NavContent>
          <NavContent style={{ fontSize: "0.625rem" }}>
            <AppLink href="/">개인정보처리방침</AppLink>
            <Copyright>© GRETA Inc. All rights reserved</Copyright>
          </NavContent>
        </Nav>
      </Wrap>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
`;
const Wrap = styled.footer`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  max-width: 1024px;
  margin: 0 auto;
  padding: 2rem;
  color: white;
  font-size: 0.75rem;
`;
const Copyright = styled.span`
  font-weight: 600;
  letter-spacing: 0.1em;
`;
const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const NavContent = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: end;
`;
