import React from "react";
import styled from "styled-components";

const Title = (props) => {
  const sub = props.sub ? props.sub : "Loren Ipsum";
  const desc = props.desc ? props.desc : null;
  return (
    <Conatiner>
      <sub>{sub}</sub>
      <h1>{props.children}</h1>
      <p>{desc}</p>
    </Conatiner>
  );
};

export default Title;

const Conatiner = styled.div`
  text-transform: capitalize;
`;
