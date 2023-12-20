import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    removeCart: (state, action) => {
      state.items.splice(state.items.indexOf(action.payload), 1);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItems, removeCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
