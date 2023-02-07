import React from "react";
import styled from "styled-components";

const KeyPerson = (props) => {
  const mailto = `mailto:${props.info.email}`;

  return (
    <Container>
      <h3>{props.info.name}</h3>
      <sub>{props.info.position}</sub>
      <Context>
        {props.info.dep}
        <br />
        {props.info.dep2}
      </Context>
      <Context>
        <A href={mailto}>{props.info.email}</A>
      </Context>
    </Container>
  );
};

export default KeyPerson;

const Container = styled.div`
  width: 100%;
  height: 300px;
  border: 1px solid ${({ theme }) => theme.colors.lightgray};
  padding: 2rem 3rem;
  background: white;
`;
const Context = styled.p`
  font-size: 0.875rem;
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
