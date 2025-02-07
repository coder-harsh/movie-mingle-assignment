import { createContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
    const fetchMovies = async (query) => {
        if (!query.trim()) return;

        setIsLoading(true); // Start loading
        try {
            const response = await axios.get(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);

            if (response.data.Response === "True") {
                setMovies(response.data.Search);
                setShowResults(true);
                console.log(response.data.Search)
                toast.success(`${response.data.Search.length}` + " movies found..", {
                    position: "top-right",
                })
            } else {
                toast.error(`${response.data.Error}`, {
                    position: "top-right",
                })
                console.log(response.data.Error)
                setMovies([]);
                setShowResults(false);
            }
        } catch (error) {
            console.error("Error fetching movies:", error);
            toast.error(`${error}`, {
                position: "top-right",
            })
            console.log(error)
        } finally {
            setIsLoading(false); // Stop loading
        }
    };

    return (
        <MoviesContext.Provider value={{ fetchMovies, movies, showResults, isLoading }}>
            {children}
        </MoviesContext.Provider>
    );
};
