import Image from "next/image";
import React from "react";
import { Link as Scroll } from "react-scroll";
import styled from "styled-components";

import Button from "@/components/atoms/Button";
import Title from "@/components/atoms/Title";

import Main from "../../../public/image/main.png";

const HeroSection = (props) => {
  return (
    <Container>
      <Grid>
        <Placeholder style={{ order: 2 }}>
          <Image
            src={Main}
            alt="greta_main"
            size="100vw"
            auto="true"
            style={{ height: "auto", width: "100%" }}
            unoptimized={true}
            priority
          />
        </Placeholder>
        <div style={{ order: 1 }}>
          <Title sub={props.hero.subtitle} desc={props.children}>
            {props.hero.title}
          </Title>
          <Wrap>
            <Scroll to="services" smooth={true} duration={600} offset={-120}>
              <Button styleType="primary">Explore 🠗</Button>
            </Scroll>
            <Scroll to="access" smooth={true} duration={600} offset={-120}>
              <Button styleType="secondary">Access</Button>
            </Scroll>
          </Wrap>
        </div>
      </Grid>
    </Container>
  );
};

export default HeroSection;

const Container = styled.div`
  min-height: calc(933px - 72px);
  display: flex;
  gap: 1rem;
`;
const Grid = styled.div`
  ${({ theme }) => theme.breakpoint.md`
    display: grid;
    grid-template-columns: 1fr 1fr;
  `}
  gap: 1rem;
  margin: 15% 0 auto;
`;
const Wrap = styled.div`
  display: flex;
  gap: 1rem;
  margin: 2rem 0;
`;
const Placeholder = styled.div`
  position: relative;
`;
