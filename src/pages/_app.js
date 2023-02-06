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
  { name: "synthetic", href: "/business/synthetic-data-algorithm" },
  { name: "contact", href: "/contact" },
];

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <div className={inter.className}>
        <Header navigation={navigation} />
        <Container>
          <Component {...pageProps} />
          <Footer />
        </Container>
      </div>
    </ThemeProvider>
  );
}

const Container = styled.div`
  min-height: calc(100vh - 450px);
  position: relative;
  padding: 50px 0 400px;
  overflow: hidden;
`;
