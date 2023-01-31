import React from 'react';
import styled from 'styled-components';

const KeyPerson = (props) => {
  return (
    <Container>
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "end"}}>
        <Name>{props.children}</Name>
        <Position>{props.position}</Position>
      </div>
      <Wrap>
        <div>{props.dep}</div>
        <div>{props.dep2}</div>
        <div>
          {props.email}
        </div>
      </Wrap>
    </Container>
  );
};

export default KeyPerson;

const Container = styled.p`
  display: flex;
  flex-direction: column;
`
const Name = styled.span`
  font-weight: 700;
`
const Position = styled.span`
  font-size: 0.75rem;
  color: #333;
  opacity: 0.5;
  line-height: 1.5;
`
const Wrap = styled.div`
  padding-top: 0.4rem;
  font-size: 0.875rem;
`
