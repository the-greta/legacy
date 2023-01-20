import React from 'react';
import styled from 'styled-components';

import LocationInfo from '@/components/atoms/LocationInfo';
import Map from '@/components/atoms/Map';

const Location = () => {
  return (
    <div>
      <Container>
        <h2>Location</h2>
        <Wrap>
          <Context>
            <Map latitude="37.5684945" longitude="126.9795985"/>
          </Context>
          <Context>
            <LocationInfo info="주소">서울특별시 중구 무교로 28 시그너스빌딩 604호</LocationInfo>
            <LocationInfo info="전화">+82-70-8648-1024</LocationInfo>
            <LocationInfo info="이메일">greta@the-greta.com</LocationInfo>
            <LocationInfo info="영업시간">평일 09:00~18:00 (주말 휴무)</LocationInfo>
          </Context>
        </Wrap>
      </Container>
    </div>
  );
};

export default Location;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 38rem;
  margin: 0 auto;
  ${({theme}) => theme.breakpoint.lg`
    dmargin: 0 auto 0 0;
    max-width: inherit;
  `}
`
const Wrap = styled.div`
  margin: 1rem 0 1.5rem;
  ${({theme}) => theme.breakpoint.lg`
    display: flex;
    flex-direction: row-reverse;
  `}
`
const Context = styled.div`
  flex: 1;
`
