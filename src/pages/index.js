import React from "react";
import styled from "styled-components";

import Contact from "@/components/blocks/Contact";
import HeroSection from "@/components/blocks/HeroSection";
import Services from "@/components/blocks/Services";

import dataConsulting from "../../public/image/business_consulting.jpg";
import dataPlatform from "../../public/image/business_platform.jpg";
import dataSynthetic from "../../public/image/business_synthetic.jpg";

const hero = {
  title: "There is no one who loves pain itself, because it is pain",
  subtitle: "Welcome",
};
const services = [
  {
    name: "합성/재현 데이터 알고리즘",
    src: dataSynthetic,
    desc: "대법관의 임기는 6년으로 하며, 법률이 정하는 바에 의하여 연임할 수 있다.",
  },
  {
    name: "데이터 분석 컨설팅",
    src: dataConsulting,
    desc: "대법관의 임기는 6년으로 하며, 법률이 정하는 바에 의하여 연임할 수 있다.",
  },
  {
    name: "데이터 플랫폼 구축",
    src: dataPlatform,
    desc: "대법관의 임기는 6년으로 하며, 법률이 정하는 바에 의하여 연임할 수 있다.",
  },
];
const index = () => {
  return (
    <Container>
      <HeroSection hero={hero}>
        <p>
          Lorem Ipsum has been the industrys standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
      </HeroSection>
      <hr />
      <Wrap>
        <div />
        <Services services={services} />
        <div />
        <Contact />
        <div />
      </Wrap>
    </Container>
  );
};

export default index;

const Container = styled.div``;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 120px;
  max-width: 1024px;
  margin: 0 auto;
  /* padding: 0 2rem; */
`;
