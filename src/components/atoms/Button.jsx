import React from "react";
import styled from "styled-components";

const BaseButton = styled.button`
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  min-width: 100px;
  padding: 0.75rem 2rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  transition: 0.1s;
  text-transform: uppercase;
  border: 1px solid transparent;
  border-radius: 5px;
  cursor: pointer;
`;
const ButtonPrimary = styled(BaseButton)`
  background: ${({ theme }) => theme.colors.primary500};
  :hover {
    background: ${({ theme }) => theme.colors.primary700};
  }
`;
const ButtonSecondary = styled(BaseButton)`
  background: ${({ theme }) => theme.colors.white};
  :hover {
    background: ${({ theme }) => theme.colors.primary500};
  }
  border: 1px solid ${({ theme }) => theme.colors.primary500};
  color: ${({ theme }) => theme.colors.primary700};
  /* background: ${({ theme }) => theme.colors.secondary500};
  :hover {
    background: ${({ theme }) => theme.colors.secondary700};
  } */
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
