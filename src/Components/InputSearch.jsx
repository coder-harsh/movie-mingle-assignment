import React, { useState, useContext, useEffect } from 'react';
import { Input, InputGroup, InputRightAddon, Spinner } from '@chakra-ui/react';
import { IoSearch } from "react-icons/io5";
import { MoviesContext } from '../Context/MoviesContext';
import toast from 'react-hot-toast';

const placeholderTexts = [
    "Enter the movie name...",
    "Looking for a romantic flick?",
    "Romantic Movie dekhni hain to search karo..",
    "Discover an award-winning movie...",
    "What's your mood today? Search now!"
];

const InputSearch = () => {
    const { fetchMovies, isLoading } = useContext(MoviesContext);
    const [searchText, setSearchText] = useState("");
    const [placeholderIndex, setPlaceholderIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPlaceholderIndex(prevIndex => (prevIndex + 1) % placeholderTexts.length);
        }, 3000); // Change placeholder every 3 seconds
        return () => clearInterval(interval);
    }, []);

    const handleMovieSearch = () => {
        if (!searchText.trim()) {
            toast.error('Please enter the movie title before searching', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }
        fetchMovies(searchText);
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleMovieSearch();
        }
    };

    return (
        <div className='bg-white py-4 px-10 rounded-lg w-[95vw] md:w-[40rem] absolute top-[14rem]'>
            <InputGroup>
                <Input
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder={placeholderTexts[placeholderIndex]} // Dynamic placeholder
                    className='text-black'
                />
                <InputRightAddon
                    onClick={handleMovieSearch}
                    disabled={isLoading}
                    className={isLoading ? 'cursor-not-allowed' : "cursor-pointer"}>
                    {isLoading ? <Spinner /> : <IoSearch />}
                </InputRightAddon>
            </InputGroup>
        </div>
    );
};

export default InputSearch;
