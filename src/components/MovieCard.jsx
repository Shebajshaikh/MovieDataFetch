import React from "react";
import { Link } from "react-router-dom";


export const MovieCard = ({ data }) => {

  return (
    <div className=" max-w-[210px] mx-auto cursor-pointer transition-all duration-300 hover:scale-105 min-h-[450px] h-full m-[10px]">
      <Link to={`/movie/${data.imdbID}`}>
        <div>
          <img
            width="200px"
            height="320px"
            className="w-full h-50 p-3"
            loading="lazy"
            src={data.Poster}
            alt={data.Title}
          />
          <div className="text-font-primary p-3">
            <h4 className="text-xl mb-2 font-normal line-clamp">
              {data.Title}
            </h4>
            <p>{data.Year}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};