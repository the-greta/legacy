import React from "react";
import styled from "styled-components";

import AppLink from "./AppLink";

const KeyPerson = (props) => {
  const mailto = `mailto:${props.info.email}`;

  return (
    <Container>
      <div>
        <h3>{props.info.name}</h3>
        <sub>{props.info.position}</sub>
        <Context>
          {props.info.dep}
          <br />
          {props.info.dep2}
        </Context>
        <Context>
          <AppLink href={mailto} styleType="email">
            {props.info.email}
          </AppLink>
        </Context>
      </div>
      <div style={{ textAlign: "right" }}>
        <AppLink href="/" styleType="detail">
          Homepage
        </AppLink>
      </div>
    </Container>
  );
};

export default KeyPerson;

const Container = styled.div`
  width: 100%;
  height: 300px;
  border: 1px solid ${({ theme }) => theme.colors.neutral300};
  padding: 2rem 3rem;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Context = styled.p`
  font-size: 0.875rem;
`;
