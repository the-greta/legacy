import '@/styles/globals.css'

import React from 'react';
import styled from 'styled-components';

import AppLink from '@/components/atoms/AppLink';
import Footer from '@/components/atoms/Footer';
import Header from '@/components/atoms/Header';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header>
        <AppLink href="/" >회사소개</AppLink>
        <AppLink href="/" >주요기술</AppLink>
        <AppLink href="https://naver.com" >인재채용</AppLink>
      </Header>
      <Container>
        <Main>
          <Component {...pageProps} />
        </Main>
        <Footer></Footer>
      </Container>
    </>
  )
}

const Container = styled.div`
  min-height: 100vh;
  position: relative;
`
const Main = styled.main`
  padding: 66px 1.5rem 200px;
  margin: 0 auto;
  max-width: 1024px;
`
