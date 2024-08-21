import React, { useEffect } from "react";
import { MovieListing } from "../components";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies } from "../features";

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const searchTerm = localStorage.getItem('searchTerm') || 'spider'; 
    dispatch(fetchAsyncMovies(searchTerm));
  }, [dispatch]);

  return (
    <div>
      <MovieListing />
    </div>
  );
};
