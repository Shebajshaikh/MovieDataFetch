import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetMovieDetailsQuery } from '../features/apiSlice';
import { TailSpin } from 'react-loader-spinner';

export const MovieDetail = () => {
  const { id } = useParams();
  const { data: movie, isLoading, error } = useGetMovieDetailsQuery(id);

  if (isLoading) return (
    <div className="flex justify-center items-center h-screen">
      <TailSpin color="#79b8f3" height={80} width={80} />
    </div>
  );
  if (error) return (
    <div className="flex justify-center items-center h-screen text-white">
      {`Error loading movie details: ${error.message}`}
    </div>
  );

  if (!movie || movie.Response === 'False') return (
    <div className="flex justify-center items-center h-screen text-white">
      No movie details available.
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row lg:flex-row py-10 px-0 text-font-primary font-normal">
      <div className="flex flex-col md:flex-row lg:flex-row items-center">
        <img 
          src={movie.Poster} 
          alt={movie.Title} 
          className="w-full md:w-1/3 lg:w-1/4 h-auto object-cover mb-4 md:mb-0 md:mr-6 rounded-lg shadow-lg"
        />
        <div className="flex flex-col md:ml-6 lg:ml-8 text-white">
          <h2 className="text-5xl font-bold mb-2">{movie.Title}</h2>
          <p className="text-lg mb-4 ">Plot: {movie.Plot}</p>
          <div className="movie-info">
          <div>
              <span>Actors</span>
              <span>{movie.Actors}</span>
            </div>
            <div>
              <span>Language</span>
              <span>{movie.Language}</span>
            </div>
            <div>
              <span>Awards</span>
              <span>{movie.Awards}</span>
            </div>
            <div>
              <span>Country</span>
              <span>{movie.Country}</span>
            </div>
            <div>
              <span>Writer</span>
              <span>{movie.Writer}</span>
            </div>
            <div>
              <span>Released</span>
              <span>{movie.Released}</span>
            </div>
            <div>
              <span>Box Office</span>
              <span>{movie.BoxOffice}</span>
            </div>
          

            
          </div>
        </div>
      </div>
    </div>
  );
};
