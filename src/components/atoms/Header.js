import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import gretaLogo from '../../../public/logo.png'

const Header = ({children}) => {
  return (
    <Container>
      <Wrap>
        <Image
          src={gretaLogo}
          alt="Greta Logo"
          width={120}
          height={30}
          priority
        />
        <Section>
          {children}
        </Section>
      </Wrap>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 66px;
  display: flex;
  position: fixed;
  top: 0;
  border-bottom: 1px solid lightgray;
`
const Wrap = styled.header`
  width: 100%;
  display: flex;
  margin: 0 auto;
  max-width: 1024px;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1.5rem;
`
const Section = styled.section`
  display: flex;
  gap: 1.5rem;
`
