import React from "react";
import styled from "styled-components";

const BaseButton = styled.button`
  text-align: center;
  color: white;
  min-width: 100px;
  padding: 0.75rem 2rem;
  font-weight: 700;
  transition: 0.1s;
  border: 1px solid transparent;
  cursor: pointer;
`;
const ButtonPrimary = styled(BaseButton)`
  background: ${({ theme }) => theme.colors.primary};
`;
const ButtonSecondary = styled(BaseButton)`
  background: ${({ theme }) => theme.colors.secondary};
`;
const ButtonContact = styled(BaseButton)`
  background: ${({ theme }) => theme.colors.secondary};
  border: 2px solid white;
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.24em;
  :hover {
    background: white;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
const buttonStyleLists = {
  default: BaseButton,
  primary: ButtonPrimary,
  secondary: ButtonSecondary,
  contact: ButtonContact,
};
const Button = ({ styleType, onClick, children }) => {
  const Component = buttonStyleLists[styleType] || buttonStyleLists.default;
  return <Component onClick={onClick}>{children}</Component>;
};

export default Button;
