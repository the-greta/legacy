import Link from "next/link";
import React from "react";
import styled from "styled-components";

const BaseLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-weight: 700;
  transition: 0.3s ease;
  text-transform: capitalize;
  :hover {
    opacity: 0.6;
  }
  cursor: pointer;
`;
const DetaillLink = styled(BaseLink)`
  color: ${({ theme }) => theme.colors.primary700};
`;
const EmailLink = styled(BaseLink)`
  color: ${({ theme }) => theme.colors.black};
  text-decoration: underline;
  text-transform: none;
`;

const linkStylesLists = {
  default: BaseLink,
  detail: DetaillLink,
  email: EmailLink,
};

const AppLink = ({ styleType, href, target, children }) => {
  const targetTo = target || (href.startsWith("http") ? "_blank" : undefined);
  const Component = linkStylesLists[styleType] || linkStylesLists.default;
  return (
    <Component href={href} target={targetTo} scroll={false}>
      {children}
    </Component>
  );
};

export default AppLink;

const ArrowAfter = styled.span`
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
