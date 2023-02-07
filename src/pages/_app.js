import "@/styles/style.css";

import { Inter } from "@next/font/google";
import React from "react";
import styled, { ThemeProvider } from "styled-components";

import Footer from "@/components/blocks/Footer";
import Header from "@/components/blocks/Header";
import { theme } from "@/theme/theme";

const inter = Inter({ subsets: ["latin"] });
const navigation = [
  { name: "home", href: "/" },
  { name: "about", href: "/about" },
  { name: "careers", href: "/" },
];

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      {/* <div className={inter.className}> */}
      <div>
        <Header navigation={navigation} />
        <Container>
          <Main>
            <Component {...pageProps} />
          </Main>
          <Footer />
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
