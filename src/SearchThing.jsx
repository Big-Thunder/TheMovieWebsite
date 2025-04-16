import { useEffect, useState } from "react";
import { fetchCurrentList, IMAGE_BASE_URL } from "./ApiFuncs";
import { data } from "react-router-dom";
const API_KEY = import.meta.env.VITE_APP_TMDB_API_KEY;
import searchIcon from './assets/search-icon.png';

export function SearchThing(){

    const [input, setInput] = useState("");
    const [results, setResults] = useState([]);

    const fetchData = (value) => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(value)}`)
        .then((data) => data.json())
        .then((json) => {
            const results = json.results.filter((movie) => {
                return movie.title && movie.title.toLowerCase().includes(value);
            });
            console.log(results);
            setResults(results);
            
        })
    }

    const handleChange = (value) =>{
        setInput(value);
        fetchData(value);
    };

    return (
        <>
            <div className="search-bar-container">
            <input
                type="text"
                name="searchQuery"
                className="search-input"
                value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
            <img src={searchIcon} className="search-icon" />
            </div>

            <div className="search-result-div">
                {results.map((result, id) =>{
                    return <div>{result.title}</div>
                })}
            </div>
        </>
      );
      
    
}