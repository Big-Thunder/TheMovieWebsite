import { useState, useEffect } from "react";
import { fetchCurrentList, IMAGE_BASE_URL } from "../ApiFuncs"; // Import API functions
import Card from "../Card";
import Header from "../Header";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

export function MovieList() {
    const [movies, setMovies] = useState([]);
    const [listType, setListType] = useState("top_rated");

    useEffect(() => {
        if(listType){
            fetchCurrentList(listType).then(setMovies);
        }
    }, [listType]);

    
    return (
        <div>
            <Header title="FilmPaglu" listUpdateFunction={setListType}/>
            {movies.map((movie) => (
                <Card 
                    id={movie.id}
                    key={movie.id} 
                    title={movie.title} 
                    release_date={movie.release_date}
                    score={movie.vote_average}
                    img={`${IMAGE_BASE_URL}${movie.poster_path}`} // Get full image URL
                />
            ))}
        </div>
    );
}
