import React from 'react';
import styled from 'styled-components';

const Subtitle = (props) => {
  return (
    <Wrap fontSize={props.fontSize}>
      <span>{props.children}</span>
    </Wrap>
  );
};

export default Subtitle;

const Wrap = styled.div`
  color: #333;
  opacity: 0.5;
  font-size: ${props => props.fontSize}px;
  font-weight: 700;
  text-transform: uppercase;
  ${props => props.fontSize === "16"? "margin: 0 0 0.8rem 0.8rem;": ""};
`
