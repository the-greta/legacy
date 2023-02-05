import React from "react";
import styled from "styled-components";

const KeyPerson = (props) => {
  const mailto = `mailto:${props.info.email}`;

  return (
    <Container>
      <div
        style={{
          display: "flex",
          alignItems: "end",
          gap: "1rem",
        }}
      >
        <div style={{ fontWeight: 700 }}>{props.info.name}</div>
        <Position>{props.info.position}</Position>
      </div>
      <Wrap>
        <p style={{ margin: "0.2em 0" }}>
          {props.info.dep}
          <br />
          {props.info.dep2}
          <br />
        </p>
        <div style={{ marginTop: "0.5em" }}>
          <A href={mailto}>{props.info.email}</A>
          <br />
        </div>
      </Wrap>
    </Container>
  );
};

export default KeyPerson;

const Container = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.lightgray};
  border-radius: 10px;
  padding: 1rem;
`;
const Position = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.gray};
`;
const Wrap = styled.div`
  padding-top: 0.4rem;
`;
const A = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  :after {
    content: "\\00a0→";
    position: relative;
    display: inline-block;
    transition: transform 0.3s ease;
  }
  :hover {
    :after {
      transform: translateX(5px);
    }
  }
`;
