export const getMoviesByGenre = (movies, genreId) => {
  if (!genreId || genreId === "") {
    return movies;
  }

  const parsedGenreId = parseInt(genreId);

  return movies.filter((movie) =>
    movie.genre_ids?.includes(parsedGenreId)
  );
};
