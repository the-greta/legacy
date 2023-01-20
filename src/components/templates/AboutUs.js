import React from 'react';
import styled from 'styled-components';

import KeyPerson from '@/components/atoms/KeyPerson';

const AboutUs = () => {
  return (
    <Container>
      <Wrap>
        <h2>About Us</h2>
        <p>
          그레타(GRETA)는 2021년 연세대학교 응용통계학과 내 데이터 분석 전문가 두 명과 연구 파트너들이 모여 설립한 데이터 분석 솔루션 개발 및 컨설팅 기업입니다.
        </p>
        <p>
        그레타CI의 망원경과 제도 도구들은 여러 각도에서 데이터를 들여다 보고 빅데이터 시대의 새로운 미래를 그려 나가겠다는 의미를 담고 있습니다.
        </p>
        <p>
        그레타는 개인정보 유출을 최소화하는 독자적인 재현 데이터 기술로 국내 재현 데이터 시장을 이끌어 나가고자 합니다. 원자료와 같은 성질을 가지며 익명성을 지니는 재현 데이터는 앞으로 국내 데이터 사업 활성화에 크게 기여할 것입니다.
        </p>
        <p>
        그레타는 여러분께 최적의 솔루션과 기술을 제공하고, 국내 데이터 시장을 선도하기 위해 항상 최선을 다하겠습니다.
        </p>
      <KeyPersonWrap>
        <div><h3>Key<br/>Person</h3></div>
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
      </KeyPersonWrap>
      </Wrap>
      <div style={{flex: 2}}></div>
    </Container>
  );
};

export default AboutUs;

const Container = styled.div`
  display: flex;
`
const Wrap = styled.div`
  flex: 8;
`
const KeyPersonWrap = styled.div`
  display: flex;
  gap: 1.2rem;
`
