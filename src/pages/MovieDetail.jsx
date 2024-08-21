import React, { useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMoviesOrShowsDetails,
  getSelectedMovieOrShow,
  removeSelectedMovieOrShow,
} from "../features";
import { TailSpin } from "react-loader-spinner";

export const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const data = useSelector(getSelectedMovieOrShow);
  const searchTerm = location.state?.searchTerm || "";

  useEffect(() => {
    dispatch(fetchAsyncMoviesOrShowsDetails(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, imdbID]);

  const handleBack = () => {
    navigate("/", { state: { searchTerm } }); // Pass the searchTerm back to the home page
  };

  return (
    <div className="flex flex-col md:flex-row lg:flex-row py-10 px-0 text-font-primary font-normal">
      {Object.keys(data).length === 0 ? (
        <div>
          <TailSpin color="#79b8f3" height={80} width={80} />
        </div>
      ) : (
        <>
          <div>
            <button onClick={handleBack} className="mb-4 text-blue-500">Back to Search Results</button>
            <div className="text-4xl text-font-primary">{data.Title}</div>
            <div className="flex pl-[3px] mt-5 text-font-secondary flex-wrap">
            
            </div>
            <div className="mt-5 leading-7">{data.Plot}</div>
            <div className="movie-info">
            <div>
                <span>Genres</span>
                <span>{data.Genre}</span>
              </div>
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
                <span>{data. Actors}</span>
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
            </div>
          </div>
          <img src={data.Poster} alt={data.Title} />
        </>
      )}
    </div>
  );
};
