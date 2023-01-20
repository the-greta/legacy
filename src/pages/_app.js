import '@/styles/globals.css'

import { Inter } from '@next/font/google';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import AppLink from '@/components/atoms/AppLink';
import Footer from '@/components/atoms/Footer';
import Header from '@/components/atoms/Header';
import {theme} from '@/theme/theme';

const inter = Inter({subsets: ['latin']})

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <div className={inter.className}>
        <Header>
          <AppLink href="/" >회사소개</AppLink>
          <AppLink href="/solutions" >주요기술</AppLink>
          <AppLink href="https://naver.com" >인재채용</AppLink>
        </Header>
        <Container>
          <Main>
            <Component {...pageProps} />
          </Main>
          <Footer></Footer>
        </Container>
      </div>
    </ThemeProvider>
  )
}

const Container = styled.div`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`
const Main = styled.main`
  padding: 66px 3rem 300px;
  margin: 0 auto;
  max-width: 1024px;
`
