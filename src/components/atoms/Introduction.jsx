import React from "react";
import styled from "styled-components";

const Introduction = (props) => {
  return (
    <Container>
      <Title>
        <h2>{props.title}</h2>
      </Title>
      <Context>{props.children}</Context>
    </Container>
  );
};

export default Introduction;

const Container = styled.div`
  width: 100%;
`;
const Col = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled(Col)`
  flex: 1;
  text-transform: uppercase;
`;
const Context = styled(Col)`
  max-width: 38rem;
  flex: 2;
`;
