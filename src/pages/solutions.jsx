import { motion } from 'framer-motion'
import React from 'react';
import styled from 'styled-components';

import PageTitle from '@/components/atoms/SectionTitle.jsx';
// import SolutionCard from '@/components/atoms/SolutionCard.jsx';

const Solutions = () => {
  const descs = {
    'synthetic':'독자적인 재현 데이터 기술을 활용한 솔루션을 제공해드립니다. 재현 데이터는 원자료를 바탕으로 만들어진 익명성 데이터로, 개인 정보 유출 위험이 낮아 민감 정보 데이터를 활용할 수 있도록 해줍니다.',
    'concat':'독자적인 데이터 결합 기술을 활용한 솔루션을 제공해드립니다. 식별키(key)가 없는 서로 다른 두 데이터를 통계적으로 결합합니다. 이후 결합한 데이터를 분석하고 관련 모델을 개발합니다.',
    'eval':'가명/익명 처리된 데이터와 재현 데이터의 품질을 측정하는 지수를 개발합니다. 이를 기반으로 데이터가 어느 정도 재현이 잘 됐는지 평가할 수 있습니다.',
    'personal':'개인의 민감 정보가 실제로 유출될 가능성을 산정합니다. 또한 실제 유출됐을 때 손실 관련 비용을 예측/산정하는 통계 모형을 개발합니다.'
  }
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <Container>
        <PageTitle>solutions</PageTitle>
        <Grid>
          {/* <SolutionCard desc={descs.synthetic}>재현 데이터 솔루션</SolutionCard>
          <SolutionCard desc={descs.concat}>데이터 결합 솔루션</SolutionCard>
          <SolutionCard desc={descs.eval}>데이터 품질 평가 지수 개발</SolutionCard>
          <SolutionCard desc={descs.personal}>개인정보 유출 가능성 및 손실 가격 산정</SolutionCard> */}
        </Grid>
      </Container>
    </motion.div>
  );
};

export default Solutions;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 220px;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: none;
  ${({theme}) => theme.breakpoint.md`
    grid-template-columns: repeat(2, minmax(25%, auto));
    padding-top: 1.5rem;
  `}
`
