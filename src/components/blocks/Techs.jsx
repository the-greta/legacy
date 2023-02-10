import React from "react";
import styled from "styled-components";

import TechCard from "@/components/atoms/TechCard";
import Title from "@/components/atoms/Title";

const techs = ["a", "b", "c", "d"];
const Techs = () => {
  return (
    <Container>
      <Grid>
        <div>
          <Title sub="Techs">Lorem Ipsum is not simply random text.</Title>
        </div>
        <div>
          <GridContent>
            {techs.map((tech, i) => (
              <TechCard key={i} />
            ))}
          </GridContent>
        </div>
      </Grid>
    </Container>
  );
};

export default Techs;
const Container = styled.div``;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;
const GridContent = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;
