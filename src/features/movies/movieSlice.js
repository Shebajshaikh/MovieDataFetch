import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { movieApi } from "../../api/movieApi";
import { movieApiKey } from "../../api/movieAPIKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term, { rejectWithValue }) => {
    try {
      const response = await movieApi.get(`?apikey=${movieApiKey}&s=${term}&type=movie`);
      if (response.data.Response === "False") {
        return rejectWithValue(response.data.Error);
      }
      return response.data.Search;
    } catch (error) {
      return rejectWithValue("Error fetching movies.");
    }
  }
);

export const fetchAsyncMoviesOrShowsDetails = createAsyncThunk(
  "movies/fetchAsyncMoviesOrShowsDetails",
  async (id, { rejectWithValue }) => {
    try {
      const response = await movieApi.get(`?apikey=${movieApiKey}&i=${id}&Plot=full`);
      return response.data;
    } catch (error) {
      return rejectWithValue("Error fetching movie details.");
    }
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    selectedMovieOrShow: {},
    isLoading: false,
    error: null,
  },
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectedMovieOrShow = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncMovies.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
        state.movies = payload;
        state.isLoading = false;
      })
      .addCase(fetchAsyncMovies.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchAsyncMoviesOrShowsDetails.fulfilled, (state, { payload }) => {
        state.selectedMovieOrShow = payload;
      })
      .addCase(fetchAsyncMoviesOrShowsDetails.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow;
export const getLoaderInfo = (state) => state.movies.isLoading;
export const getErrorInfo = (state) => state.movies.error;
export default movieSlice.reducer;