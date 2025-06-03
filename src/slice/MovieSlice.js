import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  searchValue: "",
  selectedGenre: ""
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setSelectedGenre: (state, action) => {
      state.selectedGenre = action.payload;
    }
  },
});
export const { setMovies, setSearchValue, setSelectedGenre } = movieSlice.actions;
export default movieSlice.reducer;
