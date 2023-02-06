import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

import Button from "@/components/atoms/Button";

const CallToAction = () => {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/contact");
  };
  return (
    <Container>
      <Wrap>
        <ButtonWrap>
          <Button onClick={handleClick} styleType="contact">
            Contact
          </Button>
        </ButtonWrap>
      </Wrap>
    </Container>
  );
};

export default CallToAction;

const Container = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
`;
const Wrap = styled.div`
  padding: 1rem 2rem 0.5rem;
  text-align: center;
  display: flex;
`;
const ButtonWrap = styled.div`
  padding: 1rem 2rem 0;
  max-width: 38rem;
  margin: 0 auto;
  width: 100%;
`;
