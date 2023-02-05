import React from "react";
import styled from "styled-components";

const Heading = () => {
  return (
    <Container>
      <h1>fdsf</h1>
      <div>fdsf</div>
    </Container>
  );
};

export default Heading;

const Container = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: red;
`;
