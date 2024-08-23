import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMoviesDetails,
  getSelectedMovieOrShow,
  removeSelectedMovieOrShow,
} from "../features";
import { TailSpin } from "react-loader-spinner";

export const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);


  useEffect(() => {
    dispatch(fetchAsyncMoviesDetails(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, imdbID]);



  return (
    <div className="flex flex-col md:flex-row lg:flex-row py-10 px-0 text-font-primary font-normal">
      {Object.keys(data).length === 0 ? (
        <div>
          <TailSpin color="#79b8f3" height={80} width={80} />
        </div>
      ) : (
        <>
          <div>


            <div className="text-4xl text-font-primary">{data.Title}</div>
            <div className="flex pl-[3px] mt-5 text-font-secondary flex-wrap">

            </div>
            <div className="mt-5 leading-7">{data.Plot}</div>
            <div className="movie-info">

              <div>
                <span>Languages</span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{data.Awards}</span>
              </div>
              <div>
                <span>Actors</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Country</span>
                <span>{data.Country}</span>
              </div>
              <div>
                <span>Writers</span>
                <span>{data.Writer}</span>
              </div>
              <div>
                <span>Released    </span>
                <span>{data.Released}</span>
              </div>
              <div>
                <span>Collection    </span>
                <span>{data.BoxOffice}</span>
              </div>
            </div>
          </div>
          <img src={data.Poster} alt={data.Title} />
        </>
      )}
    </div>
  );
};
