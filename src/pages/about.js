import React from "react";
import styled from "styled-components";

import Heading from "@/components/atoms/Heading";
import Profile from "@/components/atoms/Profile";
import Founders from "@/components/blocks/Founders";

const information = [
  {
    name: "김현태",
    position: "Ph.D., FSA, CERA",
    dep: "연세대학교 응용통계학과 교수",
    dep2: "통계데이터사이언스학과 교수",
    email: "jhtkim@yonsei.ac.kr",
  },
  {
    name: "임종호",
    position: "Ph.D.",
    dep: "연세대학교 응용통계학과 교수",
    dep2: "통계데이터사이언스학과 교수",
    email: "ijh38@yonsei.ac.kr",
  },
];
const about = () => {
  return (
    <Container>
      <Heading></Heading>
      <Wrap>
        <Profile />
        <Founders information={information} />
      </Wrap>
      <div>locations</div>
    </Container>
  );
};

export default about;

const Container = styled.div``;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 1024px;
  margin: 0 auto;
`;
