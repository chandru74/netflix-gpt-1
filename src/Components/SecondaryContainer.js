import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
    const movies = useSelector(state => state.movie);
    if (!movies) return;

    return (
        <div className='bg-black text-white'>
            <div className='relative -top-56'>
                <MovieList title={"Now Playing"} moviesList={movies?.nowPlayingMovies} />
                <MovieList title={"Popular"} moviesList={movies?.popularMovies} />
                <MovieList title={"Top Rated"} moviesList={movies?.topRatedMovies} />
                {/* <MovieList title={"Continue Watching"} moviesList={movies} /> */}
            </div>
        </div>
    );
}

export default SecondaryContainer;
