import React from 'react';
import styled from 'styled-components';

import AboutUs from '@/components/templates/AboutUs';
import HeroSection from '@/components/templates/HeroSection';

const index = () => {
  return (
    <Container>
      <HeroSection/>
      <AboutUs/>
    </Container>
  );
};

export default index;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`
