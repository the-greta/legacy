import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

import Summary from "@/components/blocks/Summary";
import Techs from "@/components/blocks/Techs";

const SyntheticData = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container>
        <Wrap>
          <Summary></Summary>
          <Bg>
            <Techs />
          </Bg>
          <div />
        </Wrap>
      </Container>
    </motion.div>
  );
};

export default SyntheticData;

const Container = styled.div``;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  max-width: 1024px;
  margin: 0 auto;
`;
const Bg = styled.div`
  background: ${({ theme }) => theme.colors.neutral300};
  margin: 0 calc(50% - 50vw);
  padding: 120px calc(50vw - 50%);
  display: flex;
  flex-direction: column;
  gap: 60px;
`;
