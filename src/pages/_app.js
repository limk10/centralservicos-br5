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

function App({ Component, pageProps }) {
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
