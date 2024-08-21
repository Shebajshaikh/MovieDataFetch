import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getLoaderInfo, getErrorInfo } from "../features/movies/movieSlice";
import { MovieCard } from "./MovieCard";
import { TailSpin } from "react-loader-spinner";

export const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const isLoading = useSelector(getLoaderInfo);
  const error = useSelector(getErrorInfo); 

  return (
    <div className="my-5 mx-0">
      {isLoading && <TailSpin color="#00BFFF" height={90} width={50} />}
      {error && (
        <div className="text-center text-red-500 text-xl my-5">
          Oops, Movie Not Found. Try Another Movie Name.
        </div>
      )}
      {!isLoading && !error && (
        <div className="grid-layout">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} data={movie} />
          ))}
        </div>
      )}
    </div>
  );
};