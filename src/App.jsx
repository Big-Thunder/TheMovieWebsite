import { useState } from 'react';

import Images from './Images.js' 
import Card from './Card.jsx'
import Header from './Header.jsx'
import MovieList from './MovieList.jsx'



function App(){

  const [isDirPage, setPage] = useState(true);
  const [headerTitle, setHeaderTitle] = useState("Website Name");


  const updateHeaderTitle = (title) => {
    setHeaderTitle(title);
  }


  const updatePage = (thing, nextHeaderTitle) => {
    console.log(thing);
    
    setPage(thing);
    updateHeaderTitle(nextHeaderTitle);
  }

  return(
    <>
      <Header title={headerTitle}/>
      <MovieList/>
    </>
  );
}

export default App