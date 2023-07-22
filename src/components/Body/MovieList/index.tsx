import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../../redux/store";
import { fetchMovies } from "../../../redux/actions/movieActions";

type ReduxProps = ConnectedProps<typeof connector>;

interface MovieListProps extends ReduxProps {
  searchQuery: string; // Add the searchQuery prop
}

const MovieList: React.FC<MovieListProps> = ({
  movies,
  loading,
  error,
  fetchMovies,
  searchQuery, // Destructure the searchQuery prop
}) => {
  useEffect(() => {
    if (searchQuery) {
      fetchMovies(searchQuery); // Use the searchQuery prop as the argument
    }
  }, [fetchMovies, searchQuery]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  console.log("movies", movies);
  return (
    <div>
      <h1>{movies.movie.movies?.Title}</h1>
      <h1>{movies.movie.movies?.Actors}</h1>
      <h1>{movies.movie.movies?.Plot}</h1>
      <h1>{movies.movie.movies?.imdbRating}</h1>
      <img src={movies.movie.movies?.Poster} alt="Movie Poster" />
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  movies: state,
  loading: state.movie.loading,
  error: state.movie.error,
});

const mapDispatchToProps = {
  fetchMovies,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(MovieList);
