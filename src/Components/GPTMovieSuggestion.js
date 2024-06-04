import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GPTMovieSuggestion = () => {

    const {movieResults, movieDetailsArray} = useSelector(store => store.gpt);
    if(!movieResults) return;
    return (
        <div className='z-60 text-white mt-40 bg-black bg-opacity-80'>
            {
                movieResults?.map((movie,index) => <MovieList key={movie} title={movie} moviesList={movieDetailsArray[index]} />)
            }
            
        </div>
    );
}

export default GPTMovieSuggestion;
