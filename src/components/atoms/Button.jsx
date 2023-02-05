import React from "react";
import styled from "styled-components";

const BaseButton = styled.button`
  text-align: center;
  color: white;
  width: 100%;
  min-width: 100px;
`;
const ButtonPrimary = styled(BaseButton)`
  background: green;
`;
const ButtonDanger = styled(BaseButton)`
  background: red;
`;
const buttonStyleLists = {
  default: BaseButton,
  primary: ButtonPrimary,
  danger: ButtonDanger,
};
const Button = ({ styleType, onClick, child }) => {
  const Component = buttonStyleLists[styleType] || buttonStyleLists.default;
  return <Component onClick={onClick}>{child}</Component>;
};

export default Button;
