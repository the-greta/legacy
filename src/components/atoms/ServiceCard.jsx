import React from "react";
import styled from "styled-components";

const ServiceCard = (props) => {
  return (
    <Container>
      <Placeholder />
      <Context>
        <h3>{props.name}</h3>
        <div>{props.desc}</div>
      </Context>
    </Container>
  );
};

export default ServiceCard;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding: 4rem 2rem;
  border: 1px solid lightgray;
  margin: -1px 0;
`;
const Placeholder = styled.div`
  height: 200px;
  flex: 1;
  background: lightgray;
`;
const Context = styled.div`
  flex: 2;
`;
