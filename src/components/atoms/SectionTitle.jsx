import React from 'react';
import styled from 'styled-components';

const fontStyle = {
  margin: "1rem 0 0.5rem"
}

const SectionTitle = (props) => {
  return (
    <Wrap>
      { props.size === "h1"
      ? <h1 style={fontStyle}>{props.children}</h1>
      : <h2 style={fontStyle}>{props.children}</h2>
      }
    </Wrap>
  );
};

export default SectionTitle;

const Wrap = styled.div`
  color: #333;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
`
