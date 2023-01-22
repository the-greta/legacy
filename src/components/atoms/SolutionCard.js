import React from 'react';
import styled from 'styled-components';

const SolutionCard = (props) => {
  return (
    <Wrap>
      <a>
        <h3>{props.children}</h3>
        <Context>{props.desc}</Context>
      </a>
    </Wrap>
  );
};

export default SolutionCard;

const Context = styled.p`
  margin: 0.7rem 0;
  opacity: 0.8;
  font-size: 0.9rem;
  line-height: 1.5;
`
const Wrap = styled.div`
  border: 0px solid ${({theme}) => theme.colors.gray};
  border-radius: 0.5rem;
  padding: 1.5rem 1.5rem 1rem;
`
