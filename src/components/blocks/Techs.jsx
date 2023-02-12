import React from "react";
import styled from "styled-components";

import TechCard from "@/components/atoms/TechCard";
import Title from "@/components/atoms/Title";

const techs = [
  {
    name: "데이터 품질 평가",
    desc: "합성/재현한 데이터의 품질을 측정하는 평가 지수를 개발합니다.",
    src: "/svg/chart-bar.svg",
  },
  {
    name: "재현 데이터 생성",
    desc: "특정 데이터를 바탕으로 익명 데이터를 합성/재현합니다.",
    src: "/svg/device-analytics.svg",
  },
  {
    name: "개인정보 유출 가능성 산정",
    desc: "개인정보가 유출될 가능성과 유출시 예상되는 손실 관련 비용을 예측합니다.",
    src: "/svg/chart-infographic.svg",
  },
  {
    name: "데이터 결합",
    desc: "공통 키가 없는 서로 다른 두 데이터를 결합해 하나의 데이터로 만듭니다.",
    src: "/svg/file-analytics.svg",
  },
];
const Techs = () => {
  return (
    <Container>
      <Grid>
        <div>
          <Title sub="Techs">Lorem Ipsum is not simply random text.</Title>
        </div>
        <GridContent>
          {techs.map((tech, i) => (
            <TechCard key={i} tech={tech} />
          ))}
        </GridContent>
      </Grid>
    </Container>
  );
};

export default Techs;
const Container = styled.div``;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
`;
const GridContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  ${({ theme }) => theme.breakpoint.sm`
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  `}
  gap: 1rem;
`;
