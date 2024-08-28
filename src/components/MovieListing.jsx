import React from 'react';
import { MovieCard } from './MovieCard';
import { TailSpin } from 'react-loader-spinner';

export const MovieListing = ({ searchTerm, isLoading, error, movies, isManualSearch }) => {
  console.log('Movies in Listing:', movies);

  return (
    <div className="my-5 mx-0">
      {isManualSearch && searchTerm && !isLoading && !error && movies.length > 0 && (
        <h1 className="search-results-heading text-2xl font-extrabold text-white text-center">
          Search Results
        </h1>
      )}
      {isLoading && <TailSpin color="#00BFFF" height={90} width={50} />}
      {error && (
        <div className="text-center text-red-500 text-xl my-5">
          Oops, Movie Not Found. Try Another Movie Name.
        </div>
      )}
      {!isLoading && !error && movies.length === 0 && (
        <div className="text-center text-gray-500 text-xl my-5">
          No movies found. Try another movie name.
        </div>
      )}
      {!isLoading && !error && movies.length > 0 && (
        <div className="grid-layout" style={{ display: 'flex', flexWrap: 'wrap' }}>
          {movies.map((movie) => (
            <div key={movie.imdbID} style={{ margin: '10px' }}>
              <MovieCard data={movie} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
