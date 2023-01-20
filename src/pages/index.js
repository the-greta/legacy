import HeroSection from '@/components/templates/HeroSection';
import React from 'react';
import styled from 'styled-components';

const index = () => {
  return (
    <Container>
      <HeroSection/>
    </Container>
  );
};

export default index;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
