import { motion } from 'framer-motion'
import React from 'react';
import styled from 'styled-components';

import AboutUs from '@/components/templates/AboutUs';
import Location from '@/components/templates/Location';
import WhatWeDo from '@/components/templates/WhatWeDo';

const index = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <Container>
        <AboutUs/>
        <WhatWeDo/>
        <Hr/>
        <Location/>
      </Container>
    </motion.div>
  );
};

export default index;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`
const Hr = styled.hr`
  width: 100%;
  border-top: 2px dashed #333
`
