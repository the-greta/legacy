import React from "react";
import styled from "styled-components";

import Introduction from "@/components/atoms/Introduction";
import BusinessCards from "@/components/blocks/BusinessCards";
import HeroSection from "@/components/blocks/HeroSection";
import Partners from "@/components/blocks/Partners";

import dataConsulting from "../../public/image/business_consulting.jpg";

const Businesses = [
  {
    name: "합성/재현 데이터 알고리즘",
    src: dataConsulting,
    desc: "this is a description.",
  },
  {
    name: "데이터 분석 컨설팅",
    src: dataConsulting,
    desc: "this is a description.",
  },
  {
    name: "데이터 플랫폼 구축",
    src: dataConsulting,
    desc: "this is a description.",
  },
];

const index = () => {
  return (
    <Container>
      <HeroSection />
      <Wrap>
        <div />
        <Introduction />
        <BusinessCards businesses={Businesses} />
        <Partners />
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
  gap: 3rem;
  max-width: 1024px;
  margin: 0 auto;
`;
