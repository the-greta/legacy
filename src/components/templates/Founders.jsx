import React from 'react';
import styled from 'styled-components';

import KeyPerson from '@/components/atoms/KeyPerson';
import Subtitle from '@/components/atoms/Subtitle';
import Title from '@/components/atoms/Title';

const Founders = () => {
  return (
    <Container>
        <Wrap>
          <Title size="h2">Founders</Title>
          <Subtitle fontSize="14">공동대표</Subtitle>
        </Wrap>
        <Context>
          <KeyPerson
            position="Ph.D., FSA, CERA"
            dep="연세대학교 응용통계학과 교수"
            dep2="통계데이터사이언스학과 교수"
            email="jhtkim@yonsei.ac.kr"
          >
            김현태
          </KeyPerson>
          <KeyPerson
            position="ph.D."
            dep="연세대학교 응용통계학과 교수"
            dep2="통계데이터사이언스학과 교수"
            email="ijh38@yonsei.ac.kr"
          >
            임종호
          </KeyPerson>
        </Context>
    </Container>
  );
};

export default Founders;

const Container = styled.div`
  margin: 0 auto;
  ${({theme}) => theme.breakpoint.md`
    margin: 0;
    display: flex;
    justify-content: space-between;
  `}
`
const Wrap = styled.div`
  flex: 1;
  margin-bottom: 2rem;
  padding: 0 2rem 0 0;
  ${({theme}) => theme.breakpoint.md`
    margin-bottom: 0;
  `}
`
const Context = styled.div`
  flex: 2;
  max-width: 38rem;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 38rem;
  ${({theme}) => theme.breakpoint.sm`
    display: flex;
    gap: 3rem;
  `}
`
