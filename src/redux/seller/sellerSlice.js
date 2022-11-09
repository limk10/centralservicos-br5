import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  information: {
    nome: "",
    urlCheckout: "",
    telefones: [],
    endereço: {
      bairro: "",
      cidadeNome: "",
      estado: "",
      numero: "",
      rua: "",
    },
  },
};

const sellerSlice = createSlice({
  name: "seller",
  initialState: INITIAL_STATE,
  reducers: {
    setSeller(state, { payload }) {
      state.information = payload;
    },
  },
});

export const { setSeller } = sellerSlice.actions;

export const useSeller = (state) => {
  return state.seller;
};

export default sellerSlice.reducer;
