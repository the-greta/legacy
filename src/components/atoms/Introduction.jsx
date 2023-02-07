import React from "react";
import styled from "styled-components";

const Introduction = (props) => {
  return (
    <Container>
      <Title>{props.title}</Title>
      <Context>{props.children}</Context>
    </Container>
  );
};

export default Introduction;

const Container = styled.div`
  width: 100%;
  margin-left: auto;
  display: flex;
  gap: 2rem;
`;
const Col = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled(Col)`
  flex: 1;
  font-weight: 700;
`;
const Context = styled(Col)`
  flex: 3;
  max-width: 38rem;
  margin-left: auto;
`;
