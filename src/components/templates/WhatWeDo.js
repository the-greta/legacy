// import AppLink from '@/components/atoms/AppLink';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const WhatWeDo = () => {
  return (
    <Container>
      <div style={{flex: 2}}></div>
      <Wrap>
        <h2>What We Do?</h2>
        <Context>
          그레타 만의 전문 지식과 기술력을 바탕으로 요청 사항에 맞는 데이터 분석 솔루션과 컨설팅, 학술연구 용역 등을 제공합니다.
        </Context>
        <LinkText href="/solutions"><ArrowAfter>솔루션 보러가기</ArrowAfter></LinkText>
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
  max-width: 38rem;
`
const Context = styled.p`
  margin: 0.5rem 0 1.5rem;
`
const LinkText = styled(Link)`
  font-weight: 600;
  text-decoration: none;
  color: #333;
`
const ArrowAfter = styled.div`
  :after {
    content: '\\00a0→';
    position: relative;
    display: inline-block;
    transition: transform 300ms ease;
  }
  :hover {
    :after {
      transform: translateX(3px);
    }
  }
`
