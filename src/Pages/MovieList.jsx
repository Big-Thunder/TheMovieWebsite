import { useState, useEffect } from "react";
import { fetchCurrentList, IMAGE_BASE_URL } from "../ApiFuncs"; // Import API functions
import Card from "../Card";
import Header from "../Header";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

export function MovieList() {
    const [movies, setMovies] = useState([]);
    const [listType, setListType] = useState("popular");
    const [pageNo, setPage] = useState(1);
    
    useEffect(() => {
        // Reset list and page when list type changes
        setMovies([]);
        setPage(1);
      }, [listType]);

    useEffect(() => {
           fetchCurrentList(listType, pageNo).then((newList) => {setMovies((prev) => [...prev, ...newList]);});
    }, [listType, pageNo]);

    useEffect(() => {
        const scrollThing = () => {
            if(window.scrollY + innerHeight >= document.documentElement.scrollHeight){
                setPage((thePage) => thePage + 1);
            }
        };

        window.addEventListener("scroll", scrollThing);

    }, []);

    
    return (
        <div>
            <Header title="FilmPaglu" listUpdateFunction={setListType} currentListType={listType}/>
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
