import Image from "next/image";
import React from "react";
import styled from "styled-components";

const TechCard = (props) => {
  return (
    <Container>
      <div style={{ position: "relative" }}>
        <Image
          src="/svg/phone_fill.svg"
          alt="greta_tech"
          width={36}
          height={36}
        />
      </div>
      <Context>
        <div>
          <h3>{props.name}</h3>
          <div>{props.desc}</div>
        </div>
      </Context>
    </Container>
  );
};

export default TechCard;

const Container = styled.div`
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.breakpoint.md`
    flex-direction: row;
  `}
  gap: 2rem;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.white};
`;
const Context = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  gap: 1rem;
`;
