import React from 'react';
import styled from 'styled-components';

import KeyPerson from '@/components/atoms/KeyPerson';
import PageTitle from '@/components/atoms/PageTitle';

const AboutUs = () => {
  return (
    <Container>
      <PageTitle>about us</PageTitle>
      <Wrap>
        <Col style={{flex: 1}}>
          <Sub>Founders</Sub>
          <Row style={{gap: '3rem'}}>
            <KeyPerson
              dep="연세대학교 응용통계학과 교수"
              email="example@example.com"
            >
              김현태
            </KeyPerson>
            <KeyPerson
              dep="연세대학교 응용통계학과 교수"
              email="example@example.com"
            >
              임종호
            </KeyPerson>
          </Row>
        </Col>
        <div style={{flex: 1}}>
          <P>
            그레타(GRETA)는 2021년에 설립된 데이터 분석 솔루션 개발 및 컨설팅 기업입니다.
            연세대학교 응용통계학과 내 데이터 분석 전문가 두 명과 여러 연구 파트너를 중심으로
            학술연구 용역, 연구개발 컨설팅, 소프트웨어 개발 등의 솔루션을 제공해 드립니다.
          </P>
          <P>
            그레타는 개인정보 유출을 최소화하는 독자적인 재현 데이터 기술로
            국내 재현 데이터 시장을 끌어 나가고자 합니다.
            원본 자료와 같은 성질을 가지며 익명성을 보장하는 재현 데이터는
            앞으로 국내 데이터 사업 활성화에 크게 이바지할 것입니다.
          </P>
          <P>
            여러분께 최적의 솔루션과 기술을 제공하고,
            국내 데이터 시장을 선도하기 위해 항상 최선을 다하겠습니다.
          </P>
        </div>
      </Wrap>
    </Container>
    );
};

export default AboutUs;

const Col = styled.div`
  display: flex;
  flex-direction: column;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 38rem;
  margin: 0 auto;
  ${({theme}) => theme.breakpoint.md`
    max-width: inherit;
  `}
`
const Row = styled.div`
  display: flex;
`
const Wrap = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 1.5rem;
  ${({theme}) => theme.breakpoint.md`
    flex-direction: row;
  `}
`
const Sub = styled.div`
  font-size: 0.875rem;
  opacity: 0.5;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
`
const P = styled.p`
  margin-bottom: 1.5rem;
`
