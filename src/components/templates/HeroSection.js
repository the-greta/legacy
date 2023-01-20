import React from 'react';
import styled from 'styled-components';

const HeroSection = () => {
  return (
    <Container>
      <div style={{flex: 1}}></div>
      <Wrap>
        <h1>Great Era of Data</h1>
        <p>
          방대한 데이터가 넘치는 빅데이터 시대.<br/>
          그레타는 높은 전문성과 기술력을 바탕으로<br/>
          가치 있는 정보를 찾아내고 나아갈 방향을 제시합니다.
        </p>
      </Wrap>
    </Container>
  );
};

export default HeroSection;

const Container = styled.div`
  height: 30rem;
  background-color: #dfceb0;
  margin: 0 calc(50% - 50vw);
  width: 100vw;
`
const Wrap = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 6rem 1.5rem;
  flex: 8
`
