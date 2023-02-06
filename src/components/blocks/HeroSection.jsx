import React from "react";
import styled from "styled-components";

const HeroSection = (props) => {
  return (
    <Container>
      <Slogan>
        <h1 style={{ marginBottom: 0 }}>{props.hero.title}</h1>
        <div>{props.hero.subtitle}</div>
      </Slogan>
      <Video autoPlay loop muted>
        <source src="/video/Line.mp4" type="video/mp4" />
      </Video>
      <div>hi</div>
    </Container>
  );
};

export default HeroSection;

const Container = styled.div`
  position: relative;
  margin: -50px calc(50% - 50vw) 0;
  width: 100vw;
  height: 923px;
  overflow: hidden;
`;
const Slogan = styled.div`
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translateY(-50%) translateX(-50%);
  color: #fff;
  text-shadow: 0 0 15px #666;
  text-align: left;
`;
const Video = styled.video`
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 177.77777778vh;
  height: 56.25vw;
  min-height: 100%;
  min-width: 100%;
  filter: brightness(0.7);
`;
