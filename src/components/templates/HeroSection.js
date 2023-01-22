import React from 'react';
import styled from 'styled-components';

const HeroSection = () => {
  return (
    <Container>
      <Wrap>
        <Context>
          <Title>Great Era of Data</Title>
          <P>
            빅데이터 시대, 높은 전문성과 기술력을 바탕으로<Br/>
            그레타는 나아갈 방향을 제시합니다.
          </P>
        </Context>
      </Wrap>
    </Container>
  );
};

export default HeroSection;

const Container = styled.div`
  /* height: 30rem; */
  background-color: #dfceb0;
  /* background-color: #AC9060; */
  margin: 0 calc(50% - 50vw);
  padding: 0 calc(50vw - 50%);
  width: calc(100vw - 2 * calc(50vw - 50%));
`
const Wrap = styled.div`
  padding: 3rem 0 3rem;
  height: 100%;
  max-width: 38rem;
`
const Context = styled.div`
  max-width: 1024px;
  flex: 3;
`
const Title = styled.h1`
  font-size: 2.4rem;
`
const Br = styled.br`
  display: none;
  ${({theme}) => theme.breakpoint.sm`
    display: inline-block;
  `}
`
const P = styled.p`
  opacity: 0.7;
  font-size: 0.9rem;
  font-weight: 600;
`
