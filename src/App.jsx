import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Footer, Header } from './components';
import { Home } from './pages/Home';
import { MovieDetail } from './pages/MovieDetail';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <div className="my-0 mx-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
