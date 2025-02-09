import { createContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { scroller } from "react-scroll";
export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [moviesDetails, setMoviesDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
    const BACKENDUrl = import.meta.env.VITE_BACKENDUrl;
    const fetchMovies = async (query) => {
        if (!query.trim()) return;
        const handleMoviesUpdate = (movies) => {
            if (movies && movies.length > 0) {
                setTimeout(() => {
                    scroller.scrollTo("movies-section", { smooth: true, duration: 800 });
                }, 100);
            }
        };
        setIsLoading(true); // Start loading
        try {
            const response = await axios.get(`${BACKENDUrl}/?s=${query}/&apikey=${API_KEY}`);
            console.log(BACKENDUrl)
            if (response.data.Response === "True") {
                setMovies(response.data.Search);
                console.log(response.data.Search)
                handleMoviesUpdate(response.data.Search);
                toast.success(`${response.data.Search.length}` + " movies found..", {
                    position: "top-right",
                })
            } else {
                toast.error(`${response.data.Error}`, {
                    position: "top-right",
                })
                console.log(response.data.Error)
                setMovies([]);
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
    const fetchMovieDetails = async (imdbID) => {
        try {
            const response = await axios.get(`${BACKENDUrl}/?i=${imdbID}&apikey=${API_KEY}`)
            if (response.status == 200) {
                setMoviesDetails(response.data)
                console.log(response.data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <MoviesContext.Provider value={{ fetchMovies, movies, isLoading, fetchMovieDetails, moviesDetails }}>
            {children}
        </MoviesContext.Provider>
    );
};
