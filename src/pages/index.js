import React from 'react';
import styled from 'styled-components';

import AboutUs from '@/components/templates/AboutUs';
import HeroSection from '@/components/templates/HeroSection';
import WhatWeDo from '@/components/templates/WhatWeDo';

const index = () => {
  return (
    <Container>
      <HeroSection/>
      <AboutUs/>
      <WhatWeDo/>
    </Container>
  );
};

export default index;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`
