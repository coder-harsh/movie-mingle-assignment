import React from 'react'
import InputSearch from './InputSearch'
const Hero = () => {
    return (
        <div className='hero flex justify-center items-center relative'>
            <h1 className='text-white font-bold text-2xl'>
                Movie Mingle - The Ultimate Movie Explorer
            </h1>
            <InputSearch />
        </div>
    )
}

export default Hero
