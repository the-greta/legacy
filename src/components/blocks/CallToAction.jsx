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
            contact
          </Button>
        </ButtonWrap>
      </Wrap>
    </Container>
  );
};

export default CallToAction;

const Container = styled.div`
  background: #123150;
`;
const Wrap = styled.div`
  padding: 3rem 2rem;
  text-align: center;
  display: flex;
`;
const SubDiv = styled.div`
  font-size: 0.75rem;
  vertical-align: middle;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ButtonWrap = styled.div`
  padding: 1rem 0 1.5rem;
  max-width: 38rem;
  margin: 0 auto;
  width: 100%;
`;
