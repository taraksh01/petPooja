import { createSlice } from "@reduxjs/toolkit";

const restaurants = createSlice({
  name: "restaurants",
  initialState: {
    available: true,
    offset: [],
    banner: [],
    whatsOnMind: [],
    topRestaurants: [],
    restaurants: [],
    bestRestaurantsPlaces: [],
    bestCuisines: [],
    exploreRestaurants: [],
    popularCities: [],
  },
  reducers: {
    setAvailable: (state, action) => {
      state.available = action.payload;
    },
    setOffset: (state, action) => {
      state.offset = action.payload;
    },
    setBanner: (state, action) => {
      state.banner = action.payload;
    },
    setWhatsOnMind: (state, action) => {
      state.whatsOnMind = action.payload;
    },
    setTopRestaurants: (state, action) => {
      state.topRestaurants = action.payload;
    },
    setRestaurants: (state, action) => {
      state.restaurants = action.payload;
    },
    setBestRestaurantsPlaces: (state, action) => {
      state.bestRestaurantsPlaces = action.payload;
    },
    setBestCuisines: (state, action) => {
      state.bestCuisines = action.payload;
    },
    setExploreRestaurants: (state, action) => {
      state.exploreRestaurants = action.payload;
    },
    setPopularCities: (state, action) => {
      state.popularCities = action.payload;
    },
  },
});

export const {
  setAvailable,
  setOffset,
  setBanner,
  setWhatsOnMind,
  setTopRestaurants,
  setRestaurants,
  setBestRestaurantsPlaces,
  setBestCuisines,
  setExploreRestaurants,
  setPopularCities,
} = restaurants.actions;

export default restaurants.reducer;
