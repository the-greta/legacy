import React from "react";
import styled from "styled-components";

import Button from "@/components/atoms/Button";
import Map from "@/components/atoms/Map";
import Title from "@/components/atoms/Title";

const Access = () => {
  return (
    <Container>
      <Title sub="Lorem Ipsum">Lorem Ipsum</Title>
      <Grid>
        <Map latitude="37.5684945" longitude="126.9795985" />
        <Wrap>
          <div>
            <h3>Lorem Ipsum</h3>
            <div>There is no one who loves pain itself</div>
          </div>
          <Placeholder>
            <h2>There is no one who loves pain itself</h2>
            <div>
              <Button styleType="secondary">button</Button>
            </div>
          </Placeholder>
        </Wrap>
      </Grid>
    </Container>
  );
};

export default Access;

const Container = styled.div``;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Placeholder = styled.div`
  background: gray;
  color: white;
  height: auto;
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
