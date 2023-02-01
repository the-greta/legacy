import '@/styles/globals.css'

import { Inter } from '@next/font/google';
import { AnimatePresence } from 'framer-motion'
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import AppLink from '@/components/atoms/AppLink.jsx';
import Header from '@/components/atoms/Header.jsx';
import Footer from '@/components/blocks/Footer.jsx';
import { theme } from '@/theme/theme';

const inter = Inter({ subsets: ['latin'] })
const applyLink = "https://broad-calendula-d4c.notion.site/GRETA-ddd868d6109b4434ae9ad8efdaec2e91"

export default function App({ Component, pageProps, router }) {
  return (
    <ThemeProvider theme={theme}>
      <div className={inter.className}>
        <Header>
          <AppLink href="/about" >회사소개</AppLink>
          <AppLink href="/solutions" >사업분야</AppLink>
          <AppLink href="/contact" >문의상담</AppLink>
          <AppLink href={applyLink}>인재채용</AppLink>
        </Header>
        <Container>
          <Main>
            <AnimatePresence mode="wait"  onExitComplete={() => window.scrollTo(0, 0)}>
              <Component key={router.asPath} {...pageProps} />
            </AnimatePresence>
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
  padding: 100px 3rem 200px;
  margin: 0 auto;
  max-width: 1024px;
`
