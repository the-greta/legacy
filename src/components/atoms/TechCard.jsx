import Image from "next/image";
import React from "react";
import styled from "styled-components";

const TechCard = (props) => {
  return (
    <Container>
      <div style={{ position: "relative" }}>
        <Image src={props.tech.src} alt="greta_tech" width={44} height={44} />
      </div>
      <Context>
        <div>
          <h3>{props.tech.name}</h3>
          <div>{props.tech.desc}</div>
        </div>
      </Context>
    </Container>
  );
};

export default TechCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.breakpoint.md`
    flex-direction: column;
  `}
  padding: 2rem;
  background: ${({ theme }) => theme.colors.white};
`;
const Context = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
