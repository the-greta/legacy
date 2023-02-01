import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

import AppLink from '@/components/atoms/AppLink';
import ContactButton from '@/components/atoms/ContactButton';
import FooterMenu from '@/components/atoms/FooterMenu';

import gretaLogo from '../../../public/image/logo_white.png'

const applyLink = "https://broad-calendula-d4c.notion.site/GRETA-ddd868d6109b4434ae9ad8efdaec2e91"

const Footer = () => {
  return (
    <Container>
      <Wrap>
        <div style={{width: "fit-content"}}>
          <MenuWrap>
            <Link href="/">
              <Image
                src={gretaLogo}
                alt="Greta Logo"
                width={100}
                height={40}
                priority
              />
            </Link>
            <FooterMenu>
              <AppLink href="/about" color="#CED1D4">회사소개</AppLink>
              <AppLink href="/contact" color="#CED1D4">문의상담</AppLink>
              <AppLink href={applyLink} color="#CED1D4">인재채용</AppLink>
              <AppLink href="/contact" color="#f5f5f5">개인정보 처리방침</AppLink>
            </FooterMenu>
          </MenuWrap>
          <p style={{lineHeight: 2}}>
            ㈜그레타 | 사업자등록번호: 110111-8078051 | 공동대표: 김현태, 임종호<br/>
            주소: 서울특별시 중구 무교로 28 6층 604호 | 전화: +82-70-8648-1024<br/>
          </p>
          <span><b>© GRETA Inc. All right reserved</b></span>
        </div>
        <div style={{flex: 1}}/>
        <div style={{margin: "10px auto 0", flex: 2}}>
          <ContactButton href="/contact">contact</ContactButton>
        </div>
      </Wrap>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  color: ${({theme}) => theme.colors.gray};
  background-color: ${({theme}) => theme.colors.secondary};
  font-size: 12px;
`
const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  gap: 2rem;
  justify-content: space-between;
  max-width: 1024px;
  margin: 0 auto;
  padding: 5rem 5rem 4rem;
`
const MenuWrap = styled.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 1rem;
`