import React from 'react';
import styled from 'styled-components';

import Map from '@/components/atoms/Map';
import SectionTitle from '@/components/atoms/SectionTitle';
import Subtitle from '@/components/atoms/Subtitle';

const Access = () => {
  return (
    <Bg>
      <Container>
        <Wrap>
          <SectionTitle size="h2">Access</SectionTitle>
          <Subtitle fontSize="14">찾아오시는 길</Subtitle>
        </Wrap>
        <Context>
          <Map latitude="37.5684945" longitude="126.9795985"/>
        </Context>
      </Container>
    </Bg>
  );
};

export default Access;

const Bg = styled.div`
  margin: 0 calc(50% - 50vw);
  padding: 2.5rem calc(50vw - 50%) 3rem;
  background-color: ${({theme})=> theme.colors.lightgray};
`
const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  ${({theme}) => theme.breakpoint.md`
    display: flex;
    margin: 0;
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
  position: relative;
  margin-top: 1rem;
`