import { useEffect } from "react";
import Navbar from "../../components/Navbar";
import MovieCard from "../../components/MovieCard";
import { useDispatch, useSelector } from "react-redux";
import  getMovies  from "../../api/movies";
import Grid from '@mui/material/Grid';

import Box from '@mui/material/Box';
function Home() {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movies);
  console.log("Movies from Home:", movies);

  useEffect(() => {
    dispatch(getMovies());
  }, []);
  return (
    <>
      <Navbar />
      <Box sx={{ flexGrow: 1, padding: 5}}>
        <Grid container spacing={5}>
        {
          movies?.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        }
        </Grid>
      </Box>
    </>
  );
}
export default Home;
