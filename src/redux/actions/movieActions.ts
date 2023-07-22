import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";

export const fetchMoviesStart = (): AnyAction => {
  return {
    type: "FETCH_MOVIES_START",
  };
};

export const fetchMoviesSuccess = (movies: any): AnyAction => {
  return {
    type: "FETCH_MOVIES_SUCCESS",
    payload: movies,
  };
};

export const fetchMoviesFailure = (error: string): AnyAction => {
  return {
    type: "FETCH_MOVIES_FAILURE",
    payload: error,
  };
};
export const setSearchQuery = (query: string) => {
  return {
    type: "SET_SEARCH_QUERY",
    payload: query,
  };
};

export const fetchMovies =
  (movie: string): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    console.log("fetchMovies movie ", movie);
    dispatch(fetchMoviesStart());
    try {
      // Fetch movies from an API
      const apiUrl = process.env.REACT_APP_API_URL;
      const moviesEndpoint = process.env.REACT_APP_MOVIES_ENDPOINT;
      const response = await fetch(
        `${apiUrl}${moviesEndpoint}${movie}&plot=full`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();
      dispatch(fetchMoviesSuccess(data));
    } catch (error: any) {
      dispatch(
        fetchMoviesFailure(
          error.message || "An error occurred while fetching movies"
        )
      );
    }
  };
