import React from 'react'
import InputSearch from './InputSearch'
const Hero = () => {
    return (
        <div className='hero flex justify-center items-center relative'>
            <h1 className='text-white text-center font-bold text-5xl'>
                Movie Mingle <br />The Ultimate <span className='text-red-500'>Movie Explorer</span>
            </h1>
            <InputSearch />
        </div>
    )
}

export default Hero
