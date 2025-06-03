import axios from "axios";
import { setMovies } from "../slice/MovieSlice.js";

//action creator function and this function is called in the useEffect hook
//where ever we do the api call we also dispatch the action to update the state
export const getMovies = () => async dispatch => {
  const url =
    "https://api.themoviedb.org/3/discover/movie?api_key=43df00192e694bbc01eb529d9b3dcce7";
  try {
    const { data } = await axios.get(url);
    dispatch(setMovies(data.results));
    console.log("fetched Movies:", data);
  } catch (error) {
    return console.error("Error fetching movies:", error);
  }
};
