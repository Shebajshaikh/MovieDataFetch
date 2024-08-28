import React, { useState, useEffect } from 'react'; 
import { useNavigate, useLocation, Link } from 'react-router-dom'; 

export const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const location = useLocation(); 

  useEffect(() => { 
    const params = new URLSearchParams(location.search);
    const storedTerm = params.get('search');
    if (location.pathname.includes('/movie/')) {
      setSearchTerm('');
    } else {
      if (storedTerm) {
        setSearchTerm(storedTerm);
      } else if (storedTerm === null) {
        setSearchTerm('');
      }
    }
  }, [location]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === '') {
      alert('Search term cannot be empty!');
      return;
    }
    navigate({
      pathname: '/',
      search: `?search=${searchTerm}`,
    });
  };

  const handleLogoClick = () => {
    setSearchTerm('');
    navigate({
      pathname: '/',
      search: '',
    });
  };

  return (
    <div className="bg-secondary-color h-24 flex items-center justify-between py-0 px-10 rounded-lg shadow-lg transition-all duration-300 ease-in-out">
      <div className="text-font-primary text-xl font-semibold">
        <Link to="/" onClick={handleLogoClick}>
          MOVIE WEBSITE
        </Link>
      </div>
      <div className="flex-grow flex justify-center items-center">
        <form className="flex justify-center items-center" onSubmit={submitHandler}>
          <div className="flex items-center p-4">
            <input
              className="text-lg px-4 py-2 h-10 rounded-l-full focus:border-blue-500 outline-none shadow-md transition-all duration-300 ease-in-out transform focus:scale-105 focus:shadow-lg placeholder-gray-500 text-gray-700"
              type="text"
              placeholder="Search Movies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search Movies"
            />
            <button
              className="px-4 h-10 bg-blue-500 text-white rounded-r-full hover:bg-blue-600 transition-all duration-300 ease-in-out shadow-md focus:outline-none"
              type="submit"
              aria-label="Search"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
