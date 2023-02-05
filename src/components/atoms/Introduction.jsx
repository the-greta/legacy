import React from "react";
import styled from "styled-components";

const Introduction = (props) => {
  return (
    <Container>
      <Title>
        <h2 style={{ marginTop: 0 }}>{props.title}</h2>
      </Title>
      <Context>{props.children}</Context>
    </Container>
  );
};

export default Introduction;

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  justify-content: center;
`;
const Col = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled(Col)`
  flex: 1;
`;
const Context = styled(Col)`
  max-width: 38rem;
  flex: 2;
`;
