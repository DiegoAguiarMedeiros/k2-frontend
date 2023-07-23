import React, { CSSProperties, useEffect, useRef } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../../redux/store";
import { fetchMovies } from "../../../redux/actions/movieActions";
import "./style.scss";
import {
  DynamicSideContent,
  ThemeProvider,
  Loader,
  RatingIndicator,
  IllustratedMessage,
  BusyIndicator,
  Button,
  Toast,
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents-fiori/dist/IllustratedMessage.js";
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

  const backgroundStyle: CSSProperties = movies.movie.movies
    ? {
        position: "relative",
        backgroundImage: `url('${movies.movie.movies?.Poster}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {};

  if (loading) {
    return (
      <ThemeProvider>
        <div className="movies-content">
          <div className="overlay">
            <div className="main-content">
              <div className="info">
                <div className="info-content-load">
                  <h1>
                    <Loader />
                  </h1>
                  <p>
                    <Loader />
                  </p>
                  <h1>
                    <Loader />
                  </h1>
                  <h4>Actors:</h4>{" "}
                  <span>
                    <Loader />
                  </span>
                </div>
              </div>
              <div className="image-load">
                <BusyIndicator active size="Large" waitForDefine />
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  }

  if (movies.movie.movies?.Error) {
    return (
      <div className="movies-content">
        <div className="overlay">
          <div className="main-content">
            <IllustratedMessage>
              <h3 slot="title">{movies.movie.movies?.Error}</h3>
            </IllustratedMessage>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="movies-content" style={backgroundStyle}>
      {movies.movie.movies != undefined &&
      movies.movie.movies?.Error == undefined ? (
        <div className="overlay">
          <div className="main-content">
            <div className="info">
              <div className="info-content">
                ({movies.movie.movies?.Error})
                <h1>{movies.movie.movies?.Title}</h1>
                <p>{movies.movie.movies?.Plot}</p>
                <h4>Actors:</h4> <span>{movies.movie.movies?.Actors}</span>
                <h4>Reviews:</h4>{" "}
                <span>
                  <RatingIndicator
                    disabled
                    value={Number(movies.movie.movies?.imdbRating) / 2}
                  />
                </span>
              </div>
            </div>
            <div className="image">
              <img src={movies.movie.movies?.Poster} alt="Movie Poster" />
            </div>
          </div>
        </div>
      ) : (
        <div className="overlay">
          <div className="main-content">
            <IllustratedMessage />
          </div>
        </div>
      )}
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
