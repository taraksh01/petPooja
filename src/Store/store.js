import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import locationSlice from "./locationSlice";
import restaurants from "./restaurants";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    location: locationSlice,
    restaurants,
  },
});

export default store;
