import { useState, useEffect } from "react";
import { fetchPopularMovies, IMAGE_BASE_URL } from "../ApiFuncs"; // Import API functions
import Card from "../Card";
import Header from "../Header";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

export function MovieList() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchPopularMovies().then(setMovies);
    }, []);

    
    return (
        <div>
            <Header title="The Website"/>
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
