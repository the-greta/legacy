import React from "react";
import styled from "styled-components";

import Heading from "@/components/atoms/Heading";
import Profile from "@/components/atoms/Profile";
import Access from "@/components/blocks/Access";
import Founders from "@/components/blocks/Founders";

const heading = {
  title: "회사소개",
  subtitle: "회사소개입니다.",
};

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
      <Heading heading={heading} />
      <Wrap>
        <div />
        <Profile />
        <Founders information={information} />
        <div />
      </Wrap>
      <Bg>
        <Wrap>
          <Access />
        </Wrap>
      </Bg>
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
  padding: 0 2rem;
`;
const Bg = styled.div`
  /* background: lightblue; */
  padding: 3rem 0;
`;
