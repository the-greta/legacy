import React from "react";
import styled from "styled-components";

import AppLink from "@/components/atoms/AppLink";

const CallToAction = () => {
  return (
    <Container>
      <Wrap>
        <div>국무위원은 국무총리의 제청으로 대통령이 임명한다.</div>
        <AppLink href="/">Contact</AppLink>
      </Wrap>
    </Container>
  );
};

export default CallToAction;

const Container = styled.div`
  background: #123150;
`;
const Wrap = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 3rem 0;
  display: flex;
  justify-content: space-between;
`;
