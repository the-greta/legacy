import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const AppLink = (props) => {
  const href = props.href
  const target = props.target || (href.startsWith("http")? '_blank': undefined);
  return (
    <LinkText href={href} target={target}  scroll={false}>
      {props.children}
    </LinkText>
  );
};

export default AppLink;

const LinkText = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: 600;
  transition: 0.3s ease;
  :hover {
    opacity: 0.6;
  }
`
