import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSearchMoviesQuery } from '../features/apiSlice';
import { MovieListing } from '../components/MovieListing';

export const Home = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const searchTermFromURL = new URLSearchParams(search).get('search');
  const searchTerm = searchTermFromURL || 'spider';

  // Determine if the search is manual
  const isManualSearch = searchTermFromURL || searchTerm !== 'spider';

  const { data: movies = [], isLoading, error } = useSearchMoviesQuery(searchTerm);

  useEffect(() => {
    // Update URL if the search term is different from the one in the URL
    if (!searchTermFromURL && searchTerm !== 'spider') {
      navigate(`?search=${searchTerm}`, { replace: true });
    }
  }, [navigate, searchTerm, searchTermFromURL]);

  return (
    <div>
      <MovieListing
        movies={movies.Search || []}
        isLoading={isLoading}
        error={error}
        searchTerm={searchTerm}
        isManualSearch={isManualSearch}
      />
    </div>
  );
};
