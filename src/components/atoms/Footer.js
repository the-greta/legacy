import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
      <Wrap>
        <FooterText>
          (주) 그레타
        </FooterText>

        <FooterText>
          사업자등록번호: 110111-8078051 | 공동대표: 김현태, 임종호<br/>
          주소: 서울특별시 중구 무교로 28 6층 604호<br/>
          Tel: +82-70-8648-1024<br/>
        </FooterText>

        <FooterText>
          © GRETA Inc. All rights reserved
        </FooterText>
      </Wrap>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  display: flex;
  border-top: 1px solid lightgray;
  position: absolute;
  bottom: 0;
`
const Wrap = styled.footer`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 1.5rem 1.5rem 2rem;
`
const FooterText = styled.p`
  font-size: 0.8rem;
`
