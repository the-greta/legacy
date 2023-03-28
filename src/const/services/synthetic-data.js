const pageInfo = {
  title: "합성/재현 데이터 알고리즘",
  desc: "고도화된 통계 모형을 이용해 원자료와 동일한 구조의 데이터를 생성하는 알고리즘입니다. 개인정보 유출 위험을 최소화할 수 있으며 기존 가명/익명 처리 기법에 비해 정보 손실이 적어 데이터 활용도가 높다는 장점이 있습니다.",
  whenToUse: [
    "노출 위험으로 인해 원데이터를 그대로 공개하기 어려운 경우",
    "샘플 크기가 너무 작거나 관측된 사례가 없는 상태에서 데이터 모형/알고리즘 학습이 필요한 경우",
    " 선택 편향(Selection Match) 등 데이터 편향으로 인해 데이터 보정이 필요한 경우",
    "데이터 결합 과정에서 매칭이 되지 않은 케이스에 대한 정보를 생성하려는 경우",
  ],
  href: "https://www.kisdi.re.kr/report/view.do?key=m2101113025339&arrMasterId=4311435&masterId=4311435&artId=706876",
};

const techsInfo = {
  title: "합성/재현 데이터 관련 보유 기술",
  techs: [
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
  ],
};

export { pageInfo, techsInfo };