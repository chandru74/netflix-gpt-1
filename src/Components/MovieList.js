import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, moviesList }) => {
    return (
        <div className='ml-10'>
            <h1 className='text-2xl my-4'>{title}</h1>
            <div className='flex overflow-x-scroll no-scrollbar'>
                <div className='flex'>
                    {
                        moviesList?.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path} />)
                    }
                </div>
            </div>

        </div>
    );
}

export default MovieList;
