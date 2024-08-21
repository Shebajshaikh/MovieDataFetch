import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { fetchAsyncMovies } from '../features';

export const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const storedTerm = localStorage.getItem('searchTerm');
    if (storedTerm) {
      setSearchTerm(storedTerm);
    }
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    if (searchTerm === '') return alert('Search here....');
    localStorage.setItem('searchTerm', searchTerm);
    dispatch(fetchAsyncMovies(searchTerm));
    navigate('/');
  };

  const handleLogoClick = () => {
    setSearchTerm('');
    localStorage.removeItem('searchTerm');
    dispatch(fetchAsyncMovies('spider'));
    navigate('/');
  };

  return (
    <div className="bg-secondary-color h-24 flex items-center justify-between py-0 px-10 rounded-lg shadow-lg transition-all duration-300 ease-in-out">
      <div className="text-font-primary text-xl font-semibold">
        <Link to="/" onClick={handleLogoClick}>
          MOVIE WEBSITE
        </Link>
      </div>
      <div className="flex-grow flex justify-center items-center">  {/* Updated this line */}
        <form className="flex justify-center items-center" onSubmit={submitHandler}>
          <div className="flex items-center p-4">
            <input
              className="text-lg px-4 py-2 h-10 rounded-l-full focus:border-blue-500 outline-none shadow-md transition-all duration-300 ease-in-out transform focus:scale-105 focus:shadow-lg placeholder-gray-500 text-gray-700"
              type="text"
              placeholder="Search Movies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className="px-4 h-10 bg-blue-500 text-white rounded-r-full hover:bg-blue-600 transition-all duration-300 ease-in-out shadow-md focus:outline-none"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
