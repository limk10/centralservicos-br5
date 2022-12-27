import { Modal } from "@redq/reuse-modal";
import { Provider } from "react-redux";
import LoadingScreen from "../common/components/LoadingScreen";
import store from "../redux/store";

import "@redq/reuse-modal/es/index.css";
import "../common/assets/css/flaticon.css";
import "../common/assets/css/icon-example-page.css";

// swiper bundle styles
import "swiper/css/bundle";
import "../common/assets/css/react-slick.css";
import "../common/assets/css/rc-collapse.css";
import "rc-collapse/assets/index.css";

import Head from "next/head";
import ResetCSS from "../common/assets/css/style";
import { GlobalStyle } from "../containers/style";

function App({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <LoadingScreen />
      <Head>
        <title>Auto atendimento | BR5 Benefícios</title>
        <meta
          name="Description"
          content="Central de serviços BR5 Benfícios"
        />
      </Head>
      <ResetCSS />
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
