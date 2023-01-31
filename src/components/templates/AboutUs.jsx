import React from 'react';
import styled from 'styled-components';

import Subtitle from '@/components/atoms/Subtitle';
import Title from '@/components/atoms/Title';

const AboutUs = () => {
  return (
    <Container>
      <Wrap>
        <Title size="h2">About</Title>
        <Subtitle fontSize="14">회사 개요</Subtitle>
      </Wrap>
      <Context>
        <p style={{marginTop: 0}}>
        그레타(GRETA)는 2021년에 설립된 데이터 분석 솔루션 개발 및 컨설팅 기업입니다.
        연세대학교 응용통계학과 내 데이터 분석 전문가 두 명과 여러 연구 파트너들을 중심으로
        학술연구 용역, 연구개발 컨설팅, 소프트웨어 개발 등의 솔루션을 제공해 드립니다.
        </p>
        <p>
          그레타는 개인정보 유출을 최소화하는 독자적인 재현 데이터 기술로
          국내 재현 데이터 시장을 이끌어 나가고자 합니다.
          원본 자료와 같은 성질을 가지며 익명성을 보장하는 재현 데이터는
          앞으로 국내 데이터 사업 활성화에 크게 기여할 것입니다.
        </p>
        <p>
          여러분께 최적의 솔루션과 기술을 제공하고,
          국내 데이터 시장을 선도하기 위해 항상 최선을 다하겠습니다.
        </p>
      </Context>
    </Container>
    );
};

export default AboutUs;

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
  margin-top: 1rem;
`
