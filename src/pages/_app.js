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
import { useRouter } from "next/router";

function App({ Component, pageProps }) {
  const router = useRouter();
  const path = (/#!(\/.*)$/.exec(router.asPath) || [])[1];
  if (path) {
    router.replace(path);
  }

  return (
    <Provider store={store}>
      <LoadingScreen />
      <Modal>
        <Component {...pageProps} />
      </Modal>
    </Provider>
  );
}

export default App;
