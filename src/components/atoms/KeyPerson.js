import React from 'react';
import styled from 'styled-components';

const KeyPerson = (props) => {
  return (
    <Container>
      <div>
        {props.position} <Name>{props.children}</Name>
      </div>
      <Wrap>
        <div>
          {props.dep}
        </div>
        <div>
          {props.email}
        </div>
      </Wrap>
    </Container>
  );
};

export default KeyPerson;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.875rem;
`
const Name = styled.span`
  font-weight: 600;
  font-size: 1.2rem;
  opacity: 1;
`
const Wrap = styled.div`
  padding-top: 0.4rem;
`
