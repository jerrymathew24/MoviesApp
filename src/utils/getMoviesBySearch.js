export const getMoviesBySearch = (movies, value) => {
  // console.log("Movies:", movies);
  // console.log("Search Value:", value);
 
  
  const filteredMovies =  value?.length > 0 ? ( movies.filter(movie => movie.title.toLowerCase().includes(value.toLowerCase()))) : movies;
  return filteredMovies
};
