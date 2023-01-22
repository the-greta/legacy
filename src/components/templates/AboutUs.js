import React from 'react';
import styled from 'styled-components';

import KeyPerson from '@/components/atoms/KeyPerson';

const AboutUs = () => {
  return (
    <Container>
      <Wrap>
        <h2>About Us</h2>
        <Context>
          <P>
            그레타(GRETA)는 2021년에 설립된 데이터 분석 솔루션 개발 및 컨설팅 기업입니다.
            연세대학교 응용통계학과 내 데이터 분석 전문가 두 명과 여러 연구 파트너들을 중심으로
            학술연구 용역, 연구개발 컨설팅, 소프트웨어 개발 등의 솔루션을 제공해 드립니다.
          </P>
          <P>
            그레타는 개인정보 유출을 최소화하는 독자적인 재현 데이터 기술로
            국내 재현 데이터 시장을 이끌어 나가고자 합니다.
            원본 자료와 같은 성질을 가지며 익명성을 보장하는 재현 데이터는
            앞으로 국내 데이터 사업 활성화에 크게 기여할 것입니다.
          </P>
          <P>
            여러분께 최적의 솔루션과 기술을 제공하고,
            국내 데이터 시장을 선도하기 위해 항상 최선을 다하겠습니다.
          </P>
        </Context>
        <KeyPersonWrap>
          <div style={{paddingRight: '1rem'}}><h3>Key<br/>Person</h3></div>
          <KeyPersonContext>
            <KeyPerson
              position="공동대표"
              dep="연세대학교 응용통계학과 교수"
              email="example@example.com"
            >
              김현태
            </KeyPerson>
            <KeyPerson
              position="공동대표"
              dep="연세대학교 응용통계학과 교수"
              email="example@example.com"
            >
              임종호
            </KeyPerson>
          </KeyPersonContext>
        </KeyPersonWrap>
      </Wrap>
    </Container>
  );
};

export default AboutUs;

const Container = styled.div`
  display: flex;
`
const Wrap = styled.div`
  max-width: 38rem;
  margin: 0 auto 1.5rem;
  ${({theme}) => theme.breakpoint.lg`
    max-width: 45rem;
    margin: 0 auto 1.5rem 0;
  `}
`
const Context = styled.div`
  margin: 1rem 0 1.5rem;
`
const P = styled.p`
  margin: 0.5rem 0 1rem;
`
const KeyPersonWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  ${({theme}) => theme.breakpoint.md`
    flex-direction: row;
  `}
`
const KeyPersonContext = styled.div`
  display: flex;
  gap: 1.2rem;
`
