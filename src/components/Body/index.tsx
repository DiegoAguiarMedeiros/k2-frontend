import MovieList from "./MovieList";
import { connect, ConnectedProps } from "react-redux";

interface BodyProps {
  movieTitle: string;
}

const Body: React.FC<BodyProps> = ({ movieTitle }) => {
  return <MovieList searchQuery={movieTitle} />;
};

export default Body;
