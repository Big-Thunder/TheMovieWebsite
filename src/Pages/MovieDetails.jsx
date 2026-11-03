
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMAGE_BASE_URL, fetchMovieDetails } from "../ApiFuncs";
import star from "../assets/star.png";

export function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        let isMounted = true;

        async function fetchMovie() {
            const data = await fetchMovieDetails(id);

            if (isMounted) {
                setMovie(data);
            }
        }

        setMovie(null);
        fetchMovie();

        return () => {
            isMounted = false;
        };
    }, [id]);

    if (!movie) return <div>Loading...</div>;

    return (
        <>
            <img
                className="details-backdrop"
                src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
                alt={movie.title}
            />

            <div className="details-info-div">
                <div>
                    <div className="details-name">{movie.title}</div>

                    <div className="details-release-date">
                        {movie.release_date}

                        <div className="details-rating">
                            <img
                                src={star}
                                alt="rating"
                                className="rating-img"
                            />
                            {movie.vote_average}
                        </div>
                    </div>

                    <div className="details-desc">{movie.overview}</div>
                </div>
            </div>
        </>
    );
}
