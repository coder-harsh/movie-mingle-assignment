import React, { useState, useContext } from 'react';
import { Input, InputGroup, InputRightAddon, Spinner } from '@chakra-ui/react';
import { IoSearch } from "react-icons/io5";
import { MoviesContext } from '../Context/MoviesContext';
import toast from 'react-hot-toast';
const InputSearch = () => {
    const { fetchMovies, isLoading } = useContext(MoviesContext);
    const [searchText, setSearchText] = useState(""); // Local input state
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
            return; // Prevent empty search
        }
        fetchMovies(searchText); // No need to store query, just fetch directly
    };
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleMovieSearch(searchText);
        }
    };
    return (
        <div className='bg-white py-4 px-10 rounded-lg w-[40rem] absolute top-[19rem]'>
            <InputGroup>
                <Input
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)} onKeyDown={handleKeyPress}
                    placeholder="Search for a movie..." className='text-black'
                />
                <InputRightAddon onClick={handleMovieSearch} disabled={isLoading} className={isLoading ? 'cursor-not-allowed' : "cursor-pointer"}>
                    {isLoading ? (
                        <Spinner />
                    ) : (
                        <IoSearch />
                    )}
                </InputRightAddon>
            </InputGroup>
        </div>
    );
};

export default InputSearch;
