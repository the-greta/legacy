import React from 'react';
import styled from 'styled-components';

import LocationInfo from '@/components/atoms/LocationInfo';
import Map from '@/components/atoms/Map';

const Location = () => {
  return (
    <div>
      <Container>
        <Title>location</Title>
        <Wrap>
          <Context style={{position: 'relative'}}>
            <Map latitude="37.5684945" longitude="126.9795985"/>
            <MapShadow/>
          </Context>
          <Context>
            <LocationInfo info="주소">서울특별시 중구 무교로 28 시그너스빌딩 604호</LocationInfo>
            <LocationInfo info="전화">
              <A href="tel:+827086481024">+82-70-8648-1024</A>
            </LocationInfo>
            <LocationInfo info="이메일">
              <A href="mailto:greta@the-greta.com">greta@the-greta.com</A>
            </LocationInfo>
            <LocationInfo info="영업시간">평일 09:00~18:00</LocationInfo>
          </Context>
        </Wrap>
      </Container>
    </div>
  );
};

export default Location;

const MapShadow = styled.div`
  margin: 0.5rem 0 1rem;
  background-color: #333;
  height: 90%;
  width: 100%;
  position: absolute;
  top: 25px;
  left: 25px;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 38rem;
  margin: 0 auto;
  ${({theme}) => theme.breakpoint.md`
    margin: 0 auto 0 0;
    max-width: inherit;
  `}
`
const Wrap = styled.div`
  margin: 1rem 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  ${({theme}) => theme.breakpoint.md`
    flex-direction: row;
    gap: 5rem;
  `}
`
const Title = styled.div`
  font-size: 2.25rem;
  font-weight: 700;
  text-transform: uppercase;
`
const Context = styled.div`
  flex: 1;
`
const A = styled.a`
  text-decoration: none;
  color: #333;
`
