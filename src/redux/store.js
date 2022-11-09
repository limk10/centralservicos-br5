import { configureStore } from "@reduxjs/toolkit";

import sellerSlice from "./seller/sellerSlice";
import generalSlice from "./general/generalSlice";

const store = configureStore({
  reducer: {
    seller: sellerSlice,
    general: generalSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
