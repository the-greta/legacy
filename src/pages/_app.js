import "@/styles/style.css";

import React from "react";
import styled, { ThemeProvider } from "styled-components";

import Footer from "@/components/blocks/Footer";
import Header from "@/components/blocks/Header";
import { theme } from "@/theme/theme";

const navigation = [
  { name: "home", href: "/" },
  { name: "about", href: "/about" },
  { name: "synthetic", href: "/business/synthetic-data-algorithm" },
  { name: "contact", href: "/contact" },
];

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Header navigation={navigation} />
      <Container>
        <Component {...pageProps} />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  min-height: calc(100vh - 200px);
  position: relative;
  padding: 50px 0 150px;
  overflow: hidden;
`;
