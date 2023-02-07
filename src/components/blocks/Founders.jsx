import React from "react";
import styled from "styled-components";

import KeyPerson from "@/components/atoms/KeyPerson";
import Title from "@/components/atoms/Title";

const Founders = (props) => {
  return (
    <Container>
      <Title sub="Lorem Ipsum">Lorem Ipsum</Title>
      <Wrap>
        {props.information.map((info, i) => (
          <KeyPerson key={i} info={info} />
        ))}
      </Wrap>
    </Container>
  );
};

export default Founders;

const Container = styled.div``;
const Wrap = styled.div`
  display: flex;
  gap: 1rem;
`;
