import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Partners = () => {
  return (
    <Container>
      <h2>partners</h2>
      <Wrap>
        <Image src="/next.svg" alt="next logo" width={120} height={30} />
        <Image src="/next.svg" alt="next logo" width={120} height={30} />
        <Image src="/next.svg" alt="next logo" width={120} height={30} />
        <Image src="/next.svg" alt="next logo" width={120} height={30} />
      </Wrap>
    </Container>
  );
};

export default Partners;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Wrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 2rem;
`;
