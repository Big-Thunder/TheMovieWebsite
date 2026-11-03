
import axios from "axios";

const BASE_URL = "https://tmdb-api-proxy.iamshubham2040.workers.dev/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const tmdb = axios.create({
  baseURL: BASE_URL,
});

// Fetch top-rated movies
export const fetchTopRatedMovies = async () => {
  try {
    const response = await tmdb.get("/movie/top_rated");
    return response.data.results;
  } catch (error) {
    console.error("Error fetching top-rated movies:", error);
    return [];
  }
};

// Fetch popular movies
export const fetchPopularMovies = async () => {
  try {
    const response = await tmdb.get("/movie/popular");
    return response.data.results;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return [];
  }
};

// Fetch a specific movie list
export const fetchCurrentList = async (list, page) => {
  try {
    const response = await tmdb.get(`/movie/${list}`, {
      params: { page },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

// Fetch individual movie details
export const fetchMovieDetails = async (id) => {
  try {
    const response = await tmdb.get(`/movie/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
};

// Search movies
export const searchMovies = async (query) => {
  try {
    const response = await tmdb.get("/search/movie", {
      params: { query },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error searching movies:", error);
    return [];
  }
};

export { IMAGE_BASE_URL };
