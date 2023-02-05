import React from "react";
import styled from "styled-components";

import Map from "@/components/atoms/Map";

const Access = () => {
  return (
    <Container>
      <h2>찾아오시는 길</h2>
      <Map latitude="37.5684945" longitude="126.9795985" />
    </Container>
  );
};

export default Access;

const Container = styled.div``;
