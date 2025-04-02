import { useState, useEffect } from "react";
import moviesData from "./movies.json";
import Card from "./Card";
import Images from "./Images";

function MovieList(){
    const[movies, setMovies] = useState([]);

    useEffect(() => {
        setMovies(moviesData);    
    }, []);

    return(
        <div>
            {movies.map((movie) => (
                <Card key={movie.id} title={movie.title} desc={movie.desc} img={Images[movie.imgKey]} />
            ))}
        </div>
    )
}

export default MovieList;