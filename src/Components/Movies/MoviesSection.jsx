import { useContext } from 'react'
import { MoviesContext } from '../../Context/MoviesContext'
import MoviesCard from './MoviesCard'
import { Link } from 'react-router-dom'
const MoviesSection = () => {
    const { movies } = useContext(MoviesContext)
    return (
        <div className='py-4 bg-gray-200'>
            <h2 className='text-center font-bold text-2xl'>Movies Section</h2>
            <div className='flex justify-center items-center flex-wrap'>
                {
                    movies.map((movie) => (
                        <Link key={movie.imdbID} to={`/movie-details/${movie.imdbID}`} className='m-6 rounded-md bg-white w-[17rem] hover:shadow hover:bg-gray-50'>
                            <MoviesCard movie={movie} />
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default MoviesSection
