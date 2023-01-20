import React from 'react';
import styled from 'styled-components';

import LocationInfo from '@/components/atoms/LocationInfo';
import Map from '@/components/atoms/Map';

const Location = () => {
  return (
    <div>
      <h2>Location</h2>
      <Container>
        <div>
          <Map latitude="37.5684945" longitude="126.9795985"/>
        </div>
        <Wrap>
          <LocationInfo info="주소">서울특별시 중구 무교로 28 시그너스빌딩 604호</LocationInfo>
          <LocationInfo info="전화">+82-70-8648-1024</LocationInfo>
          <LocationInfo info="이메일">greta@the-greta.com</LocationInfo>
          <LocationInfo info="영업시간">평일 09:00~18:00 (주말 휴무)</LocationInfo>
        </Wrap>
        {/* <div style={{flex: 2}}>
          <Map latitude="37.5684945" longitude="126.9795985"/>
        </div> */}
      </Container>
    </div>
  );
};

export default Location;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0.5rem 0 1.5rem;
`
const Wrap = styled.div`
  flex: 4;
`
