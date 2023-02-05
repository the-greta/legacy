import Image from "next/image";
import React from "react";
import styled from "styled-components";

const TechCard = (props) => {
  return (
    <Container>
      <Image src="/svg/chart-bar.svg" width={24} height={24} />
      <h3>{props.tech.name}</h3>
      <Context>{props.tech.desc}</Context>
    </Container>
  );
};

export default TechCard;

const Container = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.lightgray};
  border-radius: 10px;
  padding: 1rem;
`;
const Context = styled.p`
  font-size: 0.75rem;
`;
