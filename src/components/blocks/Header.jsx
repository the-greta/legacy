import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

import AppLink from "@/components/atoms/AppLink";

import gretaLogoGold from "../../../public/image/LOGO_GOLD.png";

const Header = (props) => {
  return (
    <Container>
      <Nav>
        <Link href="/">
          <Image
            src={gretaLogoGold}
            alt="Greta Logo"
            width={120}
            height={30}
            unoptimized={true}
            priority
          />
        </Link>
        <NavSection>
          {props.navigation.map((nav, i) => (
            <AppLink key={i} href={nav.href}>
              {nav.name}
            </AppLink>
          ))}
        </NavSection>
      </Nav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: ${({ theme }) => theme.zindex.header};
  height: 70px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral500};
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  margin: auto;
  height: 100%;
  max-width: 1200px;
`;
const NavSection = styled.section`
  width: fit-content;
  display: flex;
  gap: 3rem;
`;
