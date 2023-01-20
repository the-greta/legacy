import React from 'react';
import styled from 'styled-components';

const LocationInfo = (props) => {
  return (
    <Container>
      <WrapHead flex={1}>{props.info}</WrapHead>
      <Wrap flex={4}>{props.children}</Wrap>
    </Container>
  );
};

export default LocationInfo;

const Container = styled.div`
  display: flex;
  padding: 0.5rem 0.5rem 0.5rem 0;
`
const Wrap = styled.div`
  flex: ${props => props.flex};
`
const WrapHead = styled(Wrap)`
  font-weight: 600;
`
