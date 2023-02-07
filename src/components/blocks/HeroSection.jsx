import React from "react";
import { Link as Scroll } from "react-scroll";
import styled from "styled-components";

import Button from "@/components/atoms/Button";
import Title from "@/components/atoms/Title";

const HeroSection = (props) => {
  return (
    <Container>
      <Grid>
        <div>
          <Title sub={props.hero.subtitle}>{props.hero.title}</Title>
          {props.children}
          <Wrap>
            <Scroll to="contact" smooth={true} duration={600} offset={-120}>
              <Button styleType="primary">primary</Button>
            </Scroll>
            <Scroll to="services" smooth={true} duration={600} offset={-120}>
              <Button styleType="secondary">secondary</Button>
            </Scroll>
          </Wrap>
        </div>
        <Placeholder />
      </Grid>
    </Container>
  );
};

export default HeroSection;

const Container = styled.div`
  height: calc(933px - 72px);
  display: flex;
  gap: 1rem;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin: 15% 0 auto;
`;
const Wrap = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;
const Placeholder = styled.div`
  background: gray;
  height: 400px;
`;
