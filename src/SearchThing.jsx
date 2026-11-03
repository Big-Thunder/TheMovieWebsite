
import { useState } from "react";
import { searchMovies } from "./ApiFuncs";
import searchIcon from "./assets/search-icon.png";

export function SearchThing() {
    const [input, setInput] = useState("");
    const [results, setResults] = useState([]);

    const handleChange = async (value) => {
        setInput(value);

        if (!value.trim()) {
            setResults([]);
            return;
        }

        const movies = await searchMovies(value);

        const filteredResults = movies.filter((movie) =>
            movie.title?.toLowerCase().includes(value.toLowerCase())
        );

        setResults(filteredResults);
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

                <img src={searchIcon} className="search-icon" alt="Search" />
            </div>

            <div className="search-result-div">
                {results.map((result) => (
                    <div key={result.id}>{result.title}</div>
                ))}
            </div>
        </>
    );
}
