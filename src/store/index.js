import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../slice/MovieSlice.js";
// This is the store configuration file where we combine all the reducers

const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});
export default store;
