import React, { useState, useEffect } from 'react';
import { Chip } from '@material-tailwind/react';
import { MdDateRange, MdFavoriteBorder, MdFavorite } from "react-icons/md";
import toast from 'react-hot-toast';

const MoviesCard = ({ movie }) => {
    const { Type, Poster, Title, Year, imdbID } = movie; // Ensure imdbID is available for uniqueness
    const [isFavorite, setIsFavorite] = useState(false);

    // Check if the movie is already in favorites when the component mounts (or when movie changes)
    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const alreadyFavorite = favorites.some(fav => fav.imdbID === imdbID);
        setIsFavorite(alreadyFavorite);
    }, [imdbID]);

    // Toggle favorite status and update local storage
    const handleFavourite = (e) => {
        e.preventDefault();
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (isFavorite) {
            // Remove movie from favorites
            const updatedFavorites = favorites.filter(fav => fav.imdbID !== imdbID);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
            setIsFavorite(false);
            toast.success('Removed as faviourite', {
                position: 'top-right'
            })
        } else {
            // Add movie to favorites
            favorites.push(movie);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            setIsFavorite(true);
            toast.success('Marked as faviourite', {
                position: 'top-right'
            })
        }
    };

    return (
        <div className='flex flex-col relative'>
            <Chip value={Type} color='red' className='absolute right-[0.4rem] top-[0.4rem]' />
            {/* Toggle between filled and outlined favorite icons */}
            {isFavorite ? (
                <MdFavorite
                    size={30}
                    className='absolute left-[0.4rem] top-[0.4rem] text-red-500 cursor-pointer'
                    onClick={handleFavourite}
                />
            ) : (
                <MdFavoriteBorder
                    size={30}
                    className='absolute left-[0.4rem] top-[0.4rem] text-red-500 cursor-pointer'
                    onClick={handleFavourite}
                />
            )}
            <img
                src={Poster ? Poster : "https://placehold.co/600x400"}
                alt={Title}
                className='rounded-t-md w-[17rem] h-[14rem] object-cover'
            />
            <div className='flex justify-between px-4 py-6'>
                <h3 className='text-xl font-bold text-left'>{Title}</h3>
                <span className='flex justify-center items-center'>
                    <MdDateRange size={20} className='mr-1 text-gray-600' />
                    <p className='text-gray-600'>{Year}</p>
                </span>
            </div>
        </div>
    );
};

export default MoviesCard;
