import { useEffect } from "react";
import Navbar from "../../components/Navbar";
import MovieCard from "../../components/MovieCard";
import { useDispatch, useSelector } from "react-redux";
import {getMovies} from "../../api/movies";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {getMoviesBySearch} from "../../utils/getMoviesBySearch.js";


function Home() {

  const dispatch = useDispatch();
  //we can access the movies and searchValue from the Redux store
  // using useSelector hook
  const { movies, searchValue } = useSelector((state) => state.movies);
  console.log("Movies from Home:", movies);

  const filterByMovieName = getMoviesBySearch(movies, searchValue);
  console.log("Filtered Movies:", filterByMovieName);

  useEffect(() => {
    dispatch(getMovies());
  }, []);
  return (
    <>
      <Navbar />
      <Box sx={{ flexGrow: 1, padding: 5 }}>
        <Grid container spacing={5}>
          {filterByMovieName?.length > 0 &&
            filterByMovieName.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </Grid>
      </Box>
    </>
  );
}
export default Home;
