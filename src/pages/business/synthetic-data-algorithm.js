import React from "react";
import styled from "styled-components";

import Heading from "@/components/atoms/Heading";
import Introduction from "@/components/atoms/Introduction";
import TechCards from "@/components/blocks/TechCards";

const heading = {
  title: "Synthetic Data Algorithm",
  subtitle: "합성/재현 데이터 알고리즘",
};
const techs = [
  {
    name: "데이터 품질 평가",
    desc: "합성/재현한 데이터의 품질을 측정하는 평가 지수를 개발합니다.",
  },
  {
    name: "합성/재현 데이터 생성",
    desc: "특정 데이터를 바탕으로 익명 데이터를 생성합니다.",
  },
  {
    name: "개인정보 유출 가능성 산정",
    desc: "개인정보가 유출될 가능성과 유출 시 손실 관련 비용을 예측합니다.",
  },
  {
    name: "데이터 결합",
    desc: "공통 키가 없는 서로 다른 두 데이터를 결합해 하나의 데이터로 만듭니다.",
  },
];

const SyntheticDataAlgorithm = () => {
  return (
    <div>
      <Heading heading={heading} />
      <Wrap>
        <div />
        <Introduction title="About">
          <p style={{ marginTop: 0 }}>
            고도화된 통계 모형을 이용해 원자료와 동일한 분포를 따르는 익명성
            데이터를 생성하는 알고리즘입니다. 개인정보 유출 위험을 최소화할 수
            있으며 기존 가명/익명 처리 기법에 비해 정보 손실이 적어 데이터
            활용도가 높다는 장점이 있습니다.
          </p>
          <p>
            생성된 합성/재현 데이터는 가명/익명처리된 데이터와 동등하게 인정돼,
            2020년 8월에 개정된 개인정보보호법에 따라 자유롭게 배포, 공유,
            분석이 가능합니다.
          </p>
          <p>
            다음과 같은 상황에서 활용할 수 있습니다.
            <ul>
              <li>노출 위험으로 인해 원데이터를 그대로 공개하기 어려운 경우</li>
              <li>
                샘플 크기가 너무 작거나 관측된 사례가 없는 상태에서 데이터
                모형/알고리즘 학습이 필요한 경우
              </li>
              <li>
                선택 편향(Selection Match) 등 데이터 편향으로 인해 데이터 보정이
                필요한 경우
              </li>
              <li>
                데이터 결합 과정에서 매칭이 되지 않은 케이스에 대한 정보를
                생성하려는 경우
              </li>
            </ul>
          </p>
        </Introduction>
        <div />
      </Wrap>
      <Bg>
        <Wrap>
          <TechCards techs={techs} />
        </Wrap>
      </Bg>
      <Wrap>
        <div />
        <h2>Examples</h2>
        <div />
      </Wrap>
    </div>
  );
};

export default SyntheticDataAlgorithm;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 1024px;
  margin: 0 auto;
`;
const Bg = styled.div`
  background: lightblue;
  padding: 3rem 0;
`;
