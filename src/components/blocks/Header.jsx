import React from "react";
import styled from "styled-components";

import AppLink from "@/components/atoms/AppLink";

const Header = (props) => {
  return (
    <Container>
      <Nav>
        <div>
          <b>GRETA</b>
        </div>
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
  background: white;
  opacity: 0.8;
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  margin: 0 auto;
`;
const NavSection = styled.section`
  width: fit-content;
  display: flex;
  gap: 2rem;
`;
