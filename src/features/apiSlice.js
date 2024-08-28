import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.omdbapi.com/' }),
  endpoints: (builder) => ({
    searchMovies: builder.query({
      query: (searchTerm) => `?s=${searchTerm}&apikey=f908ee1a`,
      transformResponse: (response) => {
        if (response.Response === 'False') {
          throw new Error(response.Error);
        }
        return response;
      },
    }),
    getMovieDetails: builder.query({
      query: (imdbID) => `?i=${imdbID}&apikey=f908ee1a`,
      transformResponse: (response) => {
        if (response.Response === 'False') {
          throw new Error(response.Error);
        }
        return response;
      },
    }),
  }),
});

export const { useSearchMoviesQuery, useGetMovieDetailsQuery } = apiSlice;
