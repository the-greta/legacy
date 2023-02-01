import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

import backgroundImg from '../../../public/image/bg.jpg'

const PageHeader = () => {
  return (
    <Container>
      <Image
        src={backgroundImg}
        width={700}
        height={200}
        sizes="100vw"
        style={{
          objectPosition: "center",
          objectFit: "cover",
          width: "100%",
        }}
      />
    </Container>
  );
};

export default PageHeader;

const Container = styled.div`
  margin: -100px calc(50% - 50vw) 50px;
  background-color: #123150;
  height: 12.5rem;
  overflow: hidden;
  filter: brightness(0.5);
`