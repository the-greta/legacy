import { motion } from 'framer-motion'
import React from 'react';
import styled from 'styled-components';

import ContactForm from '@/components/atoms/ContactForm';
import SectionTitle from '@/components/atoms/SectionTitle';
import Subtitle from '@/components/atoms/Subtitle';

const contact = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <Container>
        <div>
          <div style={{display: "flex", alignItems: "end"}}>
            <SectionTitle size="h1">Contact</SectionTitle>
            <Subtitle fontSize="16">문의 및 상담</Subtitle>
          </div>
          <Underline/>
          <p>
            문의 내용 및 이메일 정보를 정확히 작성해 주시면 빠른 시간 안에 답변을 드리겠습니다.
          </p>
        </div>
        <ContactForm/>
      </Container>
    </motion.div>
  );
};

export default contact;

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
