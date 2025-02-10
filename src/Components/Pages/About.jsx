
const About = () => {
    return (
        <div className='flex justify-center'>
            <div className='py-10 w-[95vw] md:w-[60rem] px-4'>
                <h1 className='text-4xl font-bold text-center mb-4'>Movie Mingle - The Movie Explorer</h1>
                <p className='text-justify mb-4 text-lg'>
                    Movie Mingle is your ultimate destination for movie search. Our search result is powered by omdbapi which has a larget set of data accurately listed by top professionsals over the years.
                </p>
                <p className='text-justify mb-4 text-lg'>
                    Movie Mingle is a free and open-source web application. We are committed to maintaining the highest standards of user experience and accessibility. If you have any suggestions or find any bugs, please don't hesitate to reach out.
                    <br />
                    <br />
                    &copy; 2022 Movie Mingle. All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default About
