import { motion } from 'framer-motion'
import React from 'react';
import styled from 'styled-components';

import AboutUs from '@/components/templates/AboutUs.jsx';
import Founders from '@/components/templates/Founders.jsx';
import Profile from '@/components/templates/Profile.jsx';

const about = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <Container>
        <AboutUs/>
        <Founders/>
        <Profile/>
      </Container>
    </motion.div>
  );
};

export default about;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`
