import Image from "next/image";
import React from "react";
import styled from "styled-components";

const BusinessCard = (props) => {
  return (
    <Container>
      <Image src={props.src} alt="placeholder" placeholder="blur" fill />
      <h3>{props.name}</h3>
      <div>{props.desc}</div>
    </Container>
  );
};

export default BusinessCard;

const Container = styled.div`
  width: 100%;
  position: relative;
`;
