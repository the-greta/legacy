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
        {/* <Hr/> */}
      </Container>
      <Bg>
        <Location/>
      </Bg>
    </motion.div>
  );
};

export default index;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`
const Hr = styled.hr`
  width: 100%;
  border-top: 2px dashed #333;
  opacity: 0;
`
const Bg = styled.div`
  margin: 5rem calc(50% - 50vw) 0;
  padding: 5rem calc(50vw - 50%) 220px;
  background-color: #D8CCB7;
`
