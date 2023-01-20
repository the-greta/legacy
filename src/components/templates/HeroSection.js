import React from 'react';
import styled from 'styled-components';

const HeroSection = () => {
  return (
    <Container>
      <Wrap>
        <div style={{flex: 1}}></div>
        <Context>
          <h1>Great Era of Data</h1>
          <p>

            빅데이터 시대, 높은 전문성과 기술력을 바탕으로<br/>
            그레타는 나아갈 방향을 제시합니다.
          </p>
        </Context>
      </Wrap>
    </Container>
  );
};

export default HeroSection;

const Container = styled.div`
  height: 30rem;
  background-color: #dfceb0;
  margin: 0 calc(50% - 50vw);
  padding: 0 calc(50vw - 50%);
  width: 100vw;
`
const Wrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`
const Context = styled.div`
  max-width: 1024px;
  flex: 3;
`
