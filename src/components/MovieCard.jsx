import React from 'react';
import { Link } from 'react-router-dom'; 

export const MovieCard = ({ data }) => {
  return (
    <div className="max-w-[210px] mx-auto cursor-pointer transition-transform duration-300 hover:scale-105 min-h-[450px] h-full m-2">
      <Link to={`/movie/${data.imdbID}`} className="block">
        <img
          width="200"
          height="320"
          className="w-full h-auto p-3"
          loading="lazy"
          src={data.Poster}
          alt={data.Title}
        />
        <div className="text-font-primary p-3">
          <h4 className="text-xl font-normal mb-2 line-clamp-2">
            {data.Title}
          </h4>
          <p className="text-sm text-white-600">{data.Year}</p>
        </div>
      </Link>
    </div>
  );
};
