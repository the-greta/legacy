import React from "react";
import styled from "styled-components";

const BaseButton = styled.button`
  text-align: center;
  color: white;
  min-width: 100px;
  padding: 0.75rem 2rem;
  font-weight: 700;
  transition: 0.1s;
  text-transform: capitalize;
  border: 1px solid transparent;
  cursor: pointer;
`;
const ButtonPrimary = styled(BaseButton)`
  background: ${({ theme }) => theme.colors.primary};
`;
const ButtonSecondary = styled(BaseButton)`
  background: ${({ theme }) => theme.colors.secondary};
`;
const buttonStyleLists = {
  default: BaseButton,
  primary: ButtonPrimary,
  secondary: ButtonSecondary,
};
const Button = ({ styleType, onClick, children }) => {
  const Component = buttonStyleLists[styleType] || buttonStyleLists.default;
  return <Component onClick={onClick}>{children}</Component>;
};

export default Button;
