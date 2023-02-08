import React from "react";
import styled from "styled-components";

const Title = (props) => {
  const sub = props.sub ? props.sub : "Loren Ipsum";
  const desc = props.desc ? props.desc : null;
  return (
    <Conatiner>
      <Subtitle>{sub}</Subtitle>
      <h2>{props.children}</h2>
      <p>{desc}</p>
    </Conatiner>
  );
};

export default Title;

const Conatiner = styled.div`
  text-transform: capitalize;
  margin-bottom: 2rem;
`;
const Subtitle = styled.sub`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary700};
`;
