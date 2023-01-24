import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import styled from 'styled-components';

import gretaLogo from '../../../public/logo.png'

const Header = ({children}) => {
  const [showMobileNav, setShowMobileNav] = useState(false)
  return (
    <Container>
      <Wrap isActive={showMobileNav}>
        <TopRow>
          <Logo href="/">
            <Image
              src={gretaLogo}
              alt="Greta Logo"
              width={120}
              height={30}
              priority
            />
          </Logo>
          <HamburgerButton onClick={() => setShowMobileNav((o) => !o)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 8l16 0m-16 8l16 0"></path>
            </svg>
          </HamburgerButton>
        </TopRow>
        <Section isActive={showMobileNav}>
          {children}
        </Section>
      </Wrap>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  top: 0;
  position: fixed;
  z-index: 1000;
  width: 100%;
  display: flex;
  border-bottom: 1px solid ${({theme}) => theme.colors.gray};
  background-color: #fff
`
const TopRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Wrap = styled(TopRow)`
  flex-direction: column;
  margin: 0 auto;
  max-width: 1024px;
  padding: 1rem 3rem 1.1rem;
  gap: 1rem;
  ${({theme}) => theme.breakpoint.sm`
    flex-direction: row;
  `}
`
const Logo = styled(Link)`
  display: flex;
`
const Section = styled.section`
  display: ${props => props.isActive? 'flex': 'none'};
  flex-direction: column;
  gap: 1.3rem;
  padding: 1.2rem 1.5rem 1rem;
  width: 100%;
  ${({theme}) => theme.breakpoint.sm`
    display: flex;
    flex-direction: row;
    width: fit-content;
    font-size: 0.875rem;
  `}
`
const HamburgerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 32px;
  border: 0px;
  border-radius: 30px;
  background-color: #fff;
  :hover {
    opacity: 0.5;
  }
  cursor: pointer;
  ${({theme}) => theme.breakpoint.sm`
    display: none;
  `}
`
