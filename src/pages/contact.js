import React from "react";
import styled from "styled-components";

import Heading from "@/components/atoms/Heading";
import ContactForm from "@/components/blocks/ContactForm";

const heading = {
  title: "문의상담",
  subtitle: "문의상담입니다.",
};
const contact = () => {
  return (
    <Container>
      <Heading heading={heading} />
      <Wrap>
        <div />
        <ContactForm />
        <div />
      </Wrap>
    </Container>
  );
};

export default contact;

const Container = styled.div``;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 38rem;
  margin: 0 auto;
  padding: 0 2rem;
`;
