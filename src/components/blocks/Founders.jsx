import React from "react";
import styled from "styled-components";

import KeyPerson from "@/components/atoms/KeyPerson";

const Founders = (props) => {
  return (
    <Container>
      <h2>공동대표</h2>
      <Wrap>
        <Context>
          {props.information.map((info, i) => (
            <KeyPerson key={i} info={info} />
          ))}
        </Context>
      </Wrap>
    </Container>
  );
};

export default Founders;

const Container = styled.div``;
const Wrap = styled.div``;
const Context = styled.div`
  justify-content: flex-start;
  display: flex;
  gap: 2rem;
`;
