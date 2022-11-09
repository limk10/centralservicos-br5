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
import Banner from "../../containers/BannerSection";
import Transactions from "../../containers/Transaction";
import Footer from "../../containers/Footer";
import { handleLoading } from "../../redux/general/generalSlice";
import { getSeller } from "../../services/api/seller";
import ResetCSS from "../../common/assets/css/style";
import { setSeller } from "../../redux/seller/sellerSlice";

const App = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = router.query;

  const init = async () => {
    try {
      // 632167f4c9e7de54b5c924c7
      dispatch(handleLoading(true));
      const { data } = await getSeller(id);
      dispatch(setSeller(data));
    } catch (error) {
      Router.push("/404");
      console.log(error);
    } finally {
      dispatch(handleLoading(false));
    }
  };

  useEffect(() => {
    if (id) {
      init();
    }
  }, [id]);

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Head>
          <title>Auto atendimento | BR5 Benefícios</title>
          <meta
            name="Description"
            content="Central de serviços BR5 Benfícios"
          />
        </Head>
        <ResetCSS />
        <GlobalStyle />
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
