import Image from "next/image";
import React from "react";
import styled from "styled-components";

import AppLink from "@/components/atoms/AppLink";

const ServiceCard = (props) => {
  return (
    <Container>
      <Wrap>
        <Image
          src={props.src}
          auto
          size="100vw"
          style={{ width: "100%", height: "auto", margin: "-60px 0" }}
          unoptimized={true}
        />
      </Wrap>
      <Context>
        <div>
          <h3>{props.name}</h3>
          <div>{props.desc}</div>
        </div>
        <LinkWrap>
          {props.href ? (
            <AppLink href={props.href} styleType="detail">
              See More
            </AppLink>
          ) : null}
        </LinkWrap>
      </Context>
    </Container>
  );
};

export default ServiceCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.breakpoint.md`
    flex-direction: row;
  `}
  gap: 2rem;
  padding: 3rem 2rem;
  border: 1px solid ${({ theme }) => theme.colors.neutral500};
  margin: -1px 0;
`;
const Wrap = styled.div`
  position: relative;
  flex: 1;
`;
const Context = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  gap: 1rem;
`;
const LinkWrap = styled.div`
  text-align: right;
  ${({ theme }) => theme.breakpoint.sm`
    text-align: left;
  `}
`;
