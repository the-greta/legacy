import React from "react";
import styled from "styled-components";

import Introduction from "@/components/atoms/Introduction";
import BusinessCards from "@/components/blocks/BusinessCards";
import Partners from "@/components/blocks/Partners";

import dataConsulting from "../../public/image/business_consulting.jpg";
import dataPlatform from "../../public/image/business_platform.jpg";
import dataSynthetic from "../../public/image/business_synthetic.jpg";

const hero = { title: "그레타 슬로건", subtitle: "부연설명" };
const businesses = [
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
      {/* <HeroSection hero={hero} /> */}
      <Wrap>
        <div />
        <Introduction title="the Great Era of Data">
          <p>
            GRETA는 전문 인력과 기술력을 바탕으로 High-End 데이터 솔루션을
            제공합니다.
          </p>
          <p>
            기업의 강점 설명 기업의 강점 설명 기업의 강점 설명 기업의 강점 설명.
            <br />
            기업의 강점 설명 기업의 강점 설명 기업의 강점 설명 기업의 강점 설명.
          </p>
        </Introduction>
        <BusinessCards businesses={businesses} />
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
  padding: 0 2rem;
`;
