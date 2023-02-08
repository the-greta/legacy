import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

import Profile from "@/components/atoms/Profile";
import Access from "@/components/blocks/Access";
import Founders from "@/components/blocks/Founders";

const profileInfo = {
  title: "기업 정보",
  subtitle: "About Us",
  desc: "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container>
        <Wrap>
          <div />
          <Profile profileInfo={profileInfo} />
          <Bg>
            <Founders information={information} />
          </Bg>
          <Access />
          <div />
        </Wrap>
      </Container>
    </motion.div>
  );
};

export default about;

const Container = styled.div``;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 120px;
  max-width: 1024px;
  margin: 0 auto;
  /* padding: 0 2rem; */
`;
const Bg = styled.div`
  background: ${({ theme }) => theme.colors.neutral300};
  margin: 0 calc(50% - 50vw);
  padding: 120px calc(50vw - 50%);
`;
