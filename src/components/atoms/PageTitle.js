import React from 'react';
import styled from 'styled-components';

const PageTitle = ({children}) => {
  return (
    <Wrap>
      {children}
    </Wrap>
  );
};

export default PageTitle;

const Wrap = styled.div`
  color: #333;
  font-size: 2.5rem;
  font-weight: 700;
  border-bottom: 3px solid #333;
  margin: 2rem 0 2rem;
  text-transform: uppercase;
  ${({theme}) => theme.breakpoint.md`
    font-size: 4.875rem;
    margin: 3rem 0 3rem;
  `}
`
