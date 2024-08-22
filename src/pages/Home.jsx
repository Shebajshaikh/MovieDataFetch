import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchAsyncMovies, getAllMovies } from "../features";
import { MovieListing } from "../components";

export const Home = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchTerm = params.get('search');
    if (searchTerm) {
      dispatch(fetchAsyncMovies(searchTerm));
    } else {
      dispatch(fetchAsyncMovies('spider'));
    }
  }, [dispatch, location]);

  
  return (
    <div>
      <MovieListing />
    </div>
  );
};
