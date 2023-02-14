import dataPlatform from "../../public/image/platform.png";
import dataConsulting from "../../public/image/solution.png";
import dataSynthetic from "../../public/image/synthetic.png";

const slogan = {
  title: "the great era of data",
  subtitle: "Welcome",
  desc: "데이터가 넘치는 빅데이터 시대. 높은 전문 지식과 기술력으로 데이터 시장을 선도합니다.",
};

const servicesInfo = [
  {
    name: "합성/재현 데이터 알고리즘",
    src: dataSynthetic,
    desc: "특정 데이터를 기반으로 구조가 유사한 익명 데이터를 생성합니다. 자체 개발한 최첨단 통계 모형을 이용해 관련 기술을 개발합니다.",
    href: "services/synthetic-data",
  },
  {
    name: "데이터 분석 컨설팅",
    src: dataConsulting,
    desc: "데이터 처리, 분석, 평가 등 클라이언트의 과제에 대한 솔루션을 제공해 드립니다.",
    href: "",
  },
  {
    name: "데이터 플랫폼 구축",
    src: dataPlatform,
    desc: "데이터 처리 및 매매가 가능한 플랫폼을 구축하고 있습니다.",
    href: "",
  },
];

const profileInfo = {
  title: "기업 정보",
  subtitle: "About Us",
};

const foundersInfo = [
  {
    name: "김현태",
    position: "Ph.D. FSA CERA",
    dep: "연세대학교 응용통계학과 교수",
    dep2: "통계데이터사이언스학과 교수",
  },
  {
    name: "임종호",
    position: "Ph.D.",
    dep: "연세대학교 응용통계학과 교수",
    dep2: "통계데이터사이언스학과 교수",
  },
];

export { foundersInfo, profileInfo, servicesInfo, slogan };
