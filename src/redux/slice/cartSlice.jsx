import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.title !== action.payload);
    },
    clearCart: (state, action) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cart.actions;
export default cart.reducer;
