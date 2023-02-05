import React from "react";
import styled from "styled-components";

import TechCard from "@/components/atoms/TechCard";

const TechCards = (props) => {
  return (
    <Container>
      <h2>보유 기술</h2>
      <Wrap>
        {props.techs.map((tech, i) => (
          <TechCard key={i} tech={tech} />
        ))}
      </Wrap>
    </Container>
  );
};

export default TechCards;

const Container = styled.div``;
const Wrap = styled.div`
  display: flex;
  gap: 1rem;
`;
