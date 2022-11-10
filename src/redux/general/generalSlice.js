import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  loading: false,
};

const generalSlice = createSlice({
  name: "general",
  initialState: INITIAL_STATE,
  reducers: {
    handleLoading(state, { payload }) {
      state.loading = payload;
    },
  },
});

export const { handleLoading } = generalSlice.actions;
export const useGeneral = (state) => {
  return state.general;
};

export default generalSlice.reducer;
