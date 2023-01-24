// import AppLink from '@/components/atoms/AppLink';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const WhatWeDo = () => {
  return (
    <Bg>
    <Container>
      <Wrap>
        <Title>What We Do?</Title>
        <Context>
          그레타 만의 전문 지식과 기술력을 바탕으로 요청 사항에 맞는 데이터 분석 솔루션과 컨설팅, 학술연구 용역 등을 제공합니다.
        </Context>
        <LinkText href="/solutions"><ArrowAfter>솔루션 보러가기</ArrowAfter></LinkText>
      </Wrap>
    </Container>
    </Bg>
  );
};

export default WhatWeDo;

const Bg = styled.div`
  /* margin: 0 calc(50% - 50vw);
  padding: 4rem calc(50vw - 50%);
  background-color: #d8ccb7; */
`
const Container = styled.div`
  display: flex;
`
const Wrap = styled.div`
  flex: 8;
  max-width: 38rem;
  margin: 0 auto;
  ${({theme}) => theme.breakpoint.md`
    margin: 0 auto 0 0;
  `}
`
const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
`
const Context = styled.p`
  margin: 1rem 0 1.5rem;
`
const LinkText = styled(Link)`
  font-weight: 700;
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
