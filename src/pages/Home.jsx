import React, { useEffect } from "react";
import { MovieListing } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncMovies, getAllMovies } from "../features";

export const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector(getAllMovies);
  const defaultText = "spider";

  useEffect(() => {
    // Fetch default movies when component mounts
    if (movies.length === 0) {
      dispatch(fetchAsyncMovies(defaultText));
    }
  }, [dispatch, movies.length]);

  return (
    <div>
      <MovieListing />
    </div>
  );
};
