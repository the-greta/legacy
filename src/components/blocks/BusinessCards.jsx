import React from "react";
import styled from "styled-components";

import BusinessCard from "@/components/atoms/BusinessCard";

const BusinessCards = (props) => {
  return (
    <Container>
      <h2>사업분야</h2>
      <Wrap>
        {props.businesses.map((business, i) => (
          <BusinessCard
            key={i}
            name={business.name}
            desc={business.desc}
            src={business.src}
          />
        ))}
      </Wrap>
    </Container>
  );
};

export default BusinessCards;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Wrap = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
`;
