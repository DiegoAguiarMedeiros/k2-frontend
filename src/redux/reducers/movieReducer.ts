import { AnyAction } from "redux";

interface Ratings {
  Source: string;
  Value: string;
}

interface Movie {
  Actors: string;
  Awards: string;
  Country: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Rated: string;
  Ratings: Ratings[];
  Released: string;
  Response: string;
  Runtime: string;
  Title: string;
  Type: string;
  Writer: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
  totalSeasons: string;
  loading: boolean;
  error: string | null;
}

export interface MovieState {
  movies: Movie | null;
  loading: boolean;
  error: string | null;
}

const initialState: MovieState = {
  movies: null,
  loading: false,
  error: null,
};

const movieReducer = (state = initialState, action: AnyAction): MovieState => {
  switch (action.type) {
    case "FETCH_MOVIES_START":
      return { ...state, loading: true, error: null };
    case "FETCH_MOVIES_SUCCESS":
      return { ...state, loading: false, movies: action.payload, error: null };
    case "FETCH_MOVIES_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default movieReducer;
