import React from 'react'
import { Chip } from '@material-tailwind/react'
import { MdDateRange } from "react-icons/md";
const MoviesCard = ({ movie }) => {
    const { Type, Poster, Title, Year } = movie;
    return (
        <div className='flex flex-col relative'>
            <Chip value={Type} color='red' className='absolute right-[0.4rem] top-[0.4rem]' />
            <img src={Poster} alt={Title} className='rounded-t-md w-[17rem] h-[14rem]' />
            <div className='flex justify-between px-4 py-6'>
                <h3 className='text-xl font-bold text-left text-wrap'>{Title}</h3>
                <span className='flex justify-center items-center'>
                    <MdDateRange size={20} className='mr-1 text-gray-600' />
                    <p className='text-gray-600'>
                        {Year}
                    </p>
                </span>
            </div>
        </div>
    )
}

export default MoviesCard
