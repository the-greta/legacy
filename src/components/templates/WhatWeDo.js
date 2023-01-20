import React from 'react';
import styled from 'styled-components';

import AppLink from '@/components/atoms/AppLink';

const WhatWeDo = () => {
  return (
    <Container>
      <div style={{flex: 2}}></div>
      <Wrap>
        <h2>What We Do?</h2>
        <Text>
          그레타 만의 전문 지식과 기술력을 바탕으로 요청 사항에 맞는 데이터 분석 솔루션과 컨설팅, 학술연구 용역 등을 제공합니다.
        </Text>
        <Button>
          <AppLink href="/">솔루션 보러가기</AppLink>
        </Button>
      </Wrap>
    </Container>
  );
};

export default WhatWeDo;

const Container = styled.div`
  display: flex;
`
const Wrap = styled.div`
  flex: 8;
`
const Text = styled.p`
  margin: 0.5rem 0 1.5rem;
`
const Button = styled.button`
  border-radius: 0.625rem;
  padding: 0.5rem 2.7rem;
  border: none;
`
