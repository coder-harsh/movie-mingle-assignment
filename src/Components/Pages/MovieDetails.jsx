import { useContext, useEffect } from "react";
import { MoviesContext } from "../../Context/MoviesContext";
import ShimmerDiv from "../Loader/ShimmerDiv";
import { useParams } from "react-router-dom";
import { FaStar, FaChartBar } from "react-icons/fa";
import { GiTomato } from "react-icons/gi";
import { Button } from "@chakra-ui/react";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const MovieDetails = () => {
    const { fetchMovieDetails, moviesDetails, isLoading } = useContext(MoviesContext);
    const { id } = useParams();
    const navigate = useNavigate()
    useEffect(() => {
        fetchMovieDetails(id);
    }, [id]);  //  Include fetchMovieDetails to prevent stale state

    if (isLoading || !moviesDetails) {
        return (
            <div className="py-20 flex justify-center items-center">
                <ShimmerDiv />
            </div>
        );
    }

    // Destructure with default values to prevent errors
    const {
        Title = "N/A",
        Year = "N/A",
        Released = "N/A",
        Runtime = "N/A",
        Genre = "",
        Director = "N/A",
        Writer = "N/A",
        Actors = "N/A",
        Plot = "No description available",
        Language = "N/A",
        Country = "N/A",
        Awards = "N/A",
        Poster = "",
        Ratings = [],
        Metascore = "N/A",
        imdbRating = "N/A",
        imdbVotes = "N/A",
    } = moviesDetails || {};

    return (
        <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="px-8">
                    <Button leftIcon={<IoMdArrowBack />} colorScheme='gray' variant='solid' onClick={() => navigate(-1)}>
                        Back
                    </Button>
                </div>
                <div className="flex flex-col md:flex-row gap-8 p-8">
                    <div className="w-full md:w-1/3">
                        <img
                            src={Poster || "/placeholder.jpg"}  // Handle missing image
                            alt={Title}
                            className="w-full h-[24rem] rounded-lg shadow-lg object-cover"
                        />
                    </div>

                    <div className="w-full md:w-2/3">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">{Title}</h1>
                        <div className="flex flex-wrap gap-4 mb-6">
                            {[Year, Runtime, Language, Country].map((item, index) =>
                                item !== "N/A" ? (
                                    <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
                                        {item}
                                    </span>
                                ) : null
                            )}
                        </div>

                        <div className="flex items-center gap-6 mb-8">
                            {imdbRating !== "N/A" && (
                                <div className="flex items-center">
                                    <FaStar className="text-yellow-400 mr-2" />
                                    <span className="text-xl font-semibold">{imdbRating}/10</span>
                                </div>
                            )}
                            {Metascore !== "N/A" && (
                                <div className="flex items-center">
                                    <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center text-white font-bold">
                                        {Metascore}
                                    </div>
                                    <span className="ml-2 text-gray-600">Metascore</span>
                                </div>
                            )}
                        </div>

                        <div className="grid grid-cols-2 gap-6 mb-8">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-500 mb-1">Genre</h3>
                                <div className="flex gap-2">
                                    {Genre ? (
                                        Genre.split(", ").map((genre, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-custom/10 text-custom rounded-full text-sm"
                                            >
                                                {genre}
                                            </span>
                                        ))
                                    ) : (
                                        <span className="text-gray-500">No Genre Available</span>
                                    )}
                                </div>
                            </div>
                            {[["Released", Released], ["Director", Director], ["Writer", Writer], ["Actors", Actors], ["Awards", Awards]].map(
                                ([label, value], index) =>
                                    value !== "N/A" && (
                                        <div key={index}>
                                            <h3 className="text-sm font-semibold text-gray-500 mb-1">{label}</h3>
                                            <p className="text-gray-900">{value}</p>
                                        </div>
                                    )
                            )}
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 px-8 py-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Plot</h3>
                    <p className="text-gray-600 leading-relaxed mb-6 text-justify">
                        {Plot}
                    </p>
                </div>

                {/*  Fix Ratings & Reviews Handling */}
                <div className="bg-gray-50 px-8 py-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Ratings & Reviews</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {Ratings.length > 0 && Ratings.map((rating, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-sm font-semibold text-gray-500">{rating.Source}</span>
                                    <FaStar className="text-yellow-400" />
                                </div>
                                <div className="text-3xl font-bold text-gray-900">{rating.Value}</div>
                                <p className="text-sm text-gray-500 mt-2">{imdbVotes} votes</p>
                            </div>
                        ))}

                        {Metascore !== "N/A" && (
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-sm font-semibold text-gray-500">Metascore</span>
                                    <FaChartBar className="text-green-500" />
                                </div>
                                <div className="text-3xl font-bold text-gray-900">{Metascore}/100</div>
                                <p className="text-sm text-gray-500 mt-2">Critics consensus</p>
                            </div>
                        )}

                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-sm font-semibold text-gray-500">Rotten Tomatoes</span>
                                <GiTomato className="text-red-500" />
                            </div>
                            <div className="text-3xl font-bold text-gray-900">87%</div>
                            <p className="text-sm text-gray-500 mt-2">Fresh rating</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MovieDetails;
