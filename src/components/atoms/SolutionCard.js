import React from 'react';
import styled from 'styled-components';

const SolutionCard = (props) => {
  return (
    <Wrap>
      <Title><BoxBefore>{props.children}</BoxBefore></Title>
      <Context>{props.desc}</Context>
    </Wrap>
  );
};

export default SolutionCard;

const Wrap = styled.div`
  border: 0px solid ${({theme}) => theme.colors.gray};
  padding: 1.5rem 2rem 3rem;
`
const Title = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
`
const Context = styled.p`
  padding: 0.7rem 0;
  font-size: 0.9rem;
  line-height: 1.5;
`
const BoxBefore = styled.div`
  :before {
    content: '\\00a0';
    width: 1rem;
    position: relative;
    display: inline-block;
    background-color: #9E804A;
    margin-right: 0.5rem;
    transition: background-color 0.5s;
  }
  :hover {
    :before {
      background-color: #005170;
    }
  }
`
