import "@/styles/style.css";

import { Inter } from "@next/font/google";
import { AnimatePresence } from "framer-motion";
import React from "react";
import styled, { ThemeProvider } from "styled-components";

import Footer from "@/components/blocks/Footer";
import Header from "@/components/blocks/Header";
import { theme } from "@/theme/theme";

const inter = Inter({ subsets: ["latin"] });
const headerNavs = [
  { name: "home", href: "/" },
  { name: "about", href: "/about" },
  {
    name: "careers",
    href: "https://broad-calendula-d4c.notion.site/GRETA-ddd868d6109b4434ae9ad8efdaec2e91",
  },
];
const footerNavs = [
  { name: "회사소개", href: "/about" },
  { name: "합성/재현데이터", href: "/" },
  {
    name: "인재채용",
    href: "https://broad-calendula-d4c.notion.site/GRETA-ddd868d6109b4434ae9ad8efdaec2e91",
  },
];

export default function App({ Component, pageProps, router }) {
  return (
    <ThemeProvider theme={theme}>
      {/* <div className={inter.className}> */}
      <div>
        <Header navigation={headerNavs} />
        <Container>
          <Main>
            <AnimatePresence
              mode="wait"
              onExitComplete={() => window.scrollTo(0, 0)}
            >
              <Component key={router.asPath} {...pageProps} />
            </AnimatePresence>
          </Main>
          <Footer navigation={footerNavs} />
        </Container>
      </div>
    </ThemeProvider>
  );
}

const Container = styled.div`
  position: relative;
  min-height: 100vh;
`;
const Main = styled.main`
  max-width: 1024px;
  margin: 0 auto;
  padding: 70px 2rem 250px;
`;
