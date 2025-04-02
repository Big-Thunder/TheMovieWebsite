import { useState, useEffect } from "react";
import { fetchPopularMovies, IMAGE_BASE_URL } from "./ApiFuncs"; // Import API functions
import Card from "./Card";

function MovieList() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchPopularMovies().then(setMovies);
    }, []);

    return (
        <div>
            {movies.map((movie) => (
                <Card 
                    key={movie.id} 
                    title={movie.title} 
                    desc={movie.tagline} // TMDB uses "overview" instead of "desc"
                    img={`${IMAGE_BASE_URL}${movie.poster_path}`} // Get full image URL
                />
            ))}
        </div>
    );
}

export default MovieList;
