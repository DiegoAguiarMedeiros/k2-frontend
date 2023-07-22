import ReactDOM from "react-dom";
import MovieList from "./MovieList";
import { connect, ConnectedProps } from "react-redux";

import { fetchMovies } from "../../redux/actions/movieActions";
type ReduxProps = ConnectedProps<typeof connect>;

interface BodyProps {
  movieTitle: string;
}

const Body: React.FC<BodyProps> = ({ movieTitle }) => {
  console.log("movieTitle", movieTitle);

  return (
    <div>
      <MovieList searchQuery={movieTitle} />
    </div>
  );
};

export default Body;
