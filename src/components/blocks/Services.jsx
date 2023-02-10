import React from "react";
import styled from "styled-components";

import ServiceCard from "@/components/atoms/ServiceCard";
import Title from "@/components/atoms/Title";

const Services = (props) => {
  return (
    <Container id="services">
      <Title sub="Services">What We Do?</Title>
      <Wrap>
        {props.services.map((service, i) => (
          <ServiceCard
            key={i}
            name={service.name}
            desc={service.desc}
            href={service.href}
            src={service.src}
          />
        ))}
      </Wrap>
    </Container>
  );
};

export default Services;

const Container = styled.div``;
const Wrap = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
`;
