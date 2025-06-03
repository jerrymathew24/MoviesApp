import { useEffect } from "react";
import Navbar from "../../components/Navbar";
import MovieCard from "../../components/MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../api/movies";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { getMoviesBySearch } from "../../utils/getMoviesBySearch.js";
import { getMoviesByGenre } from "../../utils/getMoviesByGenre.js";

function Home() {
  const dispatch = useDispatch();
  //we can access the movies and searchValue from the Redux store
  // using useSelector hook
  const { movies, searchValue, selectedGenre } = useSelector(
    (state) => state.movies
  );
  console.log("Movies from Home:", movies);

  const filterBySearchName = getMoviesBySearch(movies, searchValue);
  console.log("Filtered Movies:", filterBySearchName);

  const filterByGenreAndSearchName = getMoviesByGenre(filterBySearchName, selectedGenre);
  console.log("Filtered Movies by Genre and Search Name:", filterByGenreAndSearchName);
  

  useEffect(() => {
    dispatch(getMovies());
  }, []);
  return (
    <>
      <Navbar />
      <Box sx={{ flexGrow: 1, padding: 5 }}>
        <Grid container spacing={5}>
          {filterByGenreAndSearchName?.length > 0 &&
            filterByGenreAndSearchName.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
        </Grid>
      </Box>
    </>
  );
}
export default Home;
