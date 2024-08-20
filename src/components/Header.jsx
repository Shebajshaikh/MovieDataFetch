import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAsyncMovies } from "../features";
export const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (searchTerm === "") return alert("Search here.... ");
    dispatch(fetchAsyncMovies(searchTerm));
    setSearchTerm("");
  };

  return (
    <div className="bg-secondary-color h-24 flex items-center justify-between py-0 px-10 rounded-lg shadow-lg transition-all duration-300 ease-in-out">
      <div className="text-font-primary text-xl font-semibold">
        <Link to="/">MOVIE WEBSITE</Link>
      </div>
      <div className="w-6/12 flex justify-center">
        <form
          className="w-[70%] flex justify-center items-center"
          onSubmit={(e) => submitHandler(e)}
        >
        <div className="flex justify- items-center p-4" style={{ position: "absolute", right: "570px", top: "10px" }}>
        <div className="flex justify-center items-center">
  <input
    className="text-lg px-4 py-2 h-10 rounded-l-full focus:border-blue-500 outline-none shadow-md transition-all duration-300 ease-in-out transform focus:scale-105 focus:shadow-lg placeholder-gray-500 text-gray-700"
    type="text"
    placeholder="Search Movies..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
  <button
    className=" px-4 h-10 bg-blue-500 text-white rounded-r-full hover:bg-blue-600 transition-all duration-300 ease-in-out shadow-md focus:outline-none"
    type="submit"
  >
    Search
  </button>
</div>

</div>

        </form>
      </div>
      <div className="user-image w-12 h-12">
       
      </div>
    </div>
  );
};
