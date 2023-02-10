import React from "react";
import styled from "styled-components";

import Title from "@/components/atoms/Title";

const desc =
  "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";

const Summary = () => {
  return (
    <Container>
      <Grid>
        <div>
          <Title sub="synthetic data algorithm" desc={desc}>
            합성/재현 데이터 알고리즘
          </Title>
        </div>
        <div />
        <div>
          <Title sub="When to use?" />
          <ul>
            <li>
              Lorem Ipsum has been the industrys standard dummy text ever since
              the 1500s.
            </li>
            <li>
              Lorem Ipsum has been the industrys standard dummy text ever since
              the 1500s.
            </li>
            <li>
              Lorem Ipsum has been the industrys standard dummy text ever since
              the 1500s.
            </li>
            <li>
              Lorem Ipsum has been the industrys standard dummy text ever since
              the 1500s.
            </li>
          </ul>
        </div>
      </Grid>
    </Container>
  );
};

export default Summary;

const Container = styled.div``;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 3fr;
  margin: 15% 0;
`;
