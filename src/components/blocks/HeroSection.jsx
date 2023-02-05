import React from "react";
import styled from "styled-components";

const HeroSection = () => {
  return (
    <Container>
      <h1>title</h1>
      <div>subtitle</div>
    </Container>
  );
};

export default HeroSection;

const Container = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: red;
`;
