import { motion } from 'framer-motion'
import React from 'react';
import styled from 'styled-components';

import PageHeader from '@/components/atoms/PageHeader';
import SectionTitle from '@/components/atoms/SectionTitle';
import Subtitle from '@/components/atoms/Subtitle';
import AboutUs from '@/components/templates/AboutUs';
import Access from '@/components/templates/Access';
import Founders from '@/components/templates/Founders';
import Profile from '@/components/templates/Profile';

const about = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <PageHeader/>
      <Container>
        <div>
          <div style={{display: "flex", alignItems: "end"}}>
            <SectionTitle size="h1">Company</SectionTitle>
            <Subtitle fontSize="16">회사 소개</Subtitle>
          </div>
          <Underline/>
        </div>
        <AboutUs/>
        <Founders/>
        <Profile/>
        <Access/>
      </Container>
    </motion.div>
  );
};

export default about;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  ${({theme}) => theme.breakpoint.md`
    gap: 5rem;
  `}
`
const Underline = styled.div`
  height: 24px;
  margin: 0 calc(50% - 50vw) 0 0;
  background-color: ${({theme})=> theme.colors.primary};
`
