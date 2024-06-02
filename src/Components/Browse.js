import React from 'react';
import Header from './Header';
import UseNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
    UseNowPlayingMovies();

    return (
        <div>
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </div>
    );
}

export default Browse;
