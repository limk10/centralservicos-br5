import { useEffect } from "react";
import Router, { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import React, { Fragment } from "react";
import Head from "next/head";
import Sticky from "react-stickynode";
import { ThemeProvider } from "styled-components";
import { theme } from "../../common/theme/default";
import { GlobalStyle, ContentWrapper } from "../../containers/style";
import { DrawerProvider } from "../../common/contexts/DrawerContext";
import Navbar from "../../containers/Navbar";
import Banner from "../../containers/BannerSectionQuote";
import Transactions from "../../containers/TransactionQuote";
import Footer from "../../containers/Footer";
import ResetCSS from "../../common/assets/css/style";

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <Banner />
          <Transactions />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};

export default App;
