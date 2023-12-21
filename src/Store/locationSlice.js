import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "location",
  initialState: { details: null },
  reducers: {
    locationDetails: (state, action) => {
      state.details = action.payload;
    },
  },
});

export const { locationDetails } = locationSlice.actions;

export default locationSlice.reducer;
