import React from "react";
import styled from "styled-components";

import Introduction from "@/components/atoms/Introduction";
import BusinessCards from "@/components/blocks/BusinessCards";
import HeroSection from "@/components/blocks/HeroSection";
import Partners from "@/components/blocks/Partners";

import dataConsulting from "../../public/image/business_consulting.jpg";

const hero = { title: "그레타 슬로건", subtitle: "부연설명" };
const businesses = [
  {
    name: "합성/재현 데이터 알고리즘",
    src: dataConsulting,
    desc: "국무위원은 국무총리의 제청으로 대통령이 임명한다. 대법관의 임기는 6년으로 하며, 법률이 정하는 바에 의하여 연임할 수 있다.",
  },
  {
    name: "데이터 분석 컨설팅",
    src: dataConsulting,
    desc: "국무위원은 국무총리의 제청으로 대통령이 임명한다. 대법관의 임기는 6년으로 하며, 법률이 정하는 바에 의하여 연임할 수 있다.",
  },
  {
    name: "데이터 플랫폼 구축",
    src: dataConsulting,
    desc: "국무위원은 국무총리의 제청으로 대통령이 임명한다. 대법관의 임기는 6년으로 하며, 법률이 정하는 바에 의하여 연임할 수 있다.",
  },
];

const index = () => {
  return (
    <Container>
      <HeroSection hero={hero} />
      <Wrap>
        <div />
        <Introduction title="Introduction">
          국무위원은 국무총리의 제청으로 대통령이 임명한다. 대법관의 임기는
          6년으로 하며, 법률이 정하는 바에 의하여 연임할 수 있다.
        </Introduction>
        <BusinessCards businesses={businesses} />
        <Partners />
        <div />
      </Wrap>
    </Container>
  );
};

export default index;

const Container = styled.div`
  padding-bottom: 200px;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 1024px;
  margin: 0 auto;
`;
