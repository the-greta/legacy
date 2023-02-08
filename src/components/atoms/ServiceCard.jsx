import React from "react";
import styled from "styled-components";

import AppLink from "@/components/atoms/AppLink";

const ServiceCard = (props) => {
  return (
    <Container>
      <Placeholder />
      <Context>
        <div>
          <h3>{props.name}</h3>
          <div>{props.desc}</div>
        </div>
        {props.href ? (
          <AppLink href={props.href} styleType="detail">
            See More
          </AppLink>
        ) : null}
      </Context>
    </Container>
  );
};

export default ServiceCard;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding: 3rem 2rem;
  border: 1px solid ${({ theme }) => theme.colors.neutral500};
  margin: -1px 0;
`;
const Placeholder = styled.div`
  height: 200px;
  flex: 1;
  background: ${({ theme }) => theme.colors.neutral300};
`;
const Context = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  gap: 1rem;
`;
