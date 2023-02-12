import React from "react";
import styled from "styled-components";

import Title from "@/components/atoms/Title";

const desc =
  "고도화된 통계 모형을 이용해 원자료와 동일한 구조의 데이터를 생성하는 알고리즘입니다. 개인정보 유출 위험을 최소화할 수 있으며 기존 가명/익명 처리 기법에 비해 정보 손실이 적어 데이터 활용도가 높다는 장점이 있습니다. ";

const Summary = () => {
  return (
    <Container>
      <Grid>
        <div style={{ gridArea: "title" }}>
          <Title sub="synthetic data algorithm">
            합성/재현 데이터 알고리즘
          </Title>
        </div>
        <div />
        <When>
          <Title sub="When to use?" />
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
        </When>
        <Desc>
          <Title sub="description" />
          <p style={{ maxWidth: "40rem" }}>{desc}</p>
        </Desc>
      </Grid>
    </Container>
  );
};

export default Summary;

const Container = styled.div`
  margin: 15% 0 5%;
`;
const Grid = styled.div`
  display: grid;
  grid-template-areas:
    "title"
    "desc"
    "when";
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  ${({ theme }) => theme.breakpoint.md`
    grid-template-areas:
      "title title . when when when"
      "desc desc desc desc desc desc";
    grid-template-columns: repeat(6, 1fr);
  `};
`;
const When = styled.div`
  grid-area: when;
`;
const Desc = styled.div`
  grid-area: desc;
  margin: 2rem 0;
  padding: 2rem 0;
  border-top: 0.5px solid ${({ theme }) => theme.colors.neutral500};
`;
