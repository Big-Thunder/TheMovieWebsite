import { useState } from 'react';
import Header from './Header.jsx';
import {MovieList} from './Pages/MovieList.jsx';
import {MovieDetails} from './Pages/MovieDetails.jsx';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App(){
  return(
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MovieList />}/>
          <Route path="/movie/:id" element={<MovieDetails />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App