import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { IMAGE_BASE_URL } from '../ApiFuncs';
import star from '../assets/star.png';

export function MovieDetails(){
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const API_KEY = import.meta.env.VITE_APP_TMDB_API_KEY;

    useEffect(() => {
        async function fetchMovie() {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
            params: { api_key: import.meta.env.VITE_APP_TMDB_API_KEY },
        });
        setMovie(res.data);
        }

        fetchMovie();
    }, [id]);
    
    if (!movie) return <div>Loading...</div>;

    return(
        <>
            <img className='details-backdrop' src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}></img>
            <div className="details-info-div">
                <div>
                    <div className="details-name">{movie.title}</div>
                    <div className="details-release-date">{movie.release_date} <div className="details-rating"><img src={star} alt="rating" className="rating-img" />{movie.vote_average}</div></div>
                    <div className="details-desc">{movie.overview}</div>
                </div>
            </div>
        </>
    );
}