import { useEffect } from "react";
import Router, { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import React, { Fragment } from "react";
import Head from "next/head";
import Sticky from "react-stickynode";
import { ThemeProvider } from "styled-components";
import { theme } from "../common/theme/default";
import { GlobalStyle, ContentWrapper } from "../containers/style";
import { DrawerProvider } from "../common/contexts/DrawerContext";
import Navbar from "../containers/Navbar";
import Banner from "../containers/BannerSection";
import Transactions from "../containers/Transaction";
import Footer from "../containers/Footer";
import { handleLoading } from "../redux/general/generalSlice";
import { getSeller } from "../services/api/seller";
import ResetCSS from "../common/assets/css/style";
import { setSeller } from "../redux/seller/sellerSlice";
import { openModal, closeModal } from "@redq/reuse-modal";
import Button from "../common/components/Button";
import ContinueInformationWrapper from "../containers/ContinueInformationWrapper";

const App = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id, company } = router.query;

  const CloseModalButton = () => (
    <Button
      className="modalCloseBtn"
      variant="fab"
      onClick={() => closeModal()}
      icon={<i className="flaticon-plus-symbol" />}
    />
  );

  const handleContinueInformationWrapper = () => {
    openModal({
      config: {
        className: "login-modal",
        disableDragging: true,
        width: "100%",
        height: "70%",
        animationFrom: { transform: "translateY(100px)" },
        animationTo: { transform: "translateY(0)" },
        transition: {
          mass: 1,
          tension: 180,
          friction: 26,
        },
      },
      component: ContinueInformationWrapper,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: false,
    });
  };

  const init = async () => {
    try {
      dispatch(handleLoading(true));
      const { data } = await getSeller(id);
      dispatch(setSeller(data));
      if (company) handleContinueInformationWrapper();
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
