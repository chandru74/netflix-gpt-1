import React from 'react';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import { useSelector } from 'react-redux';
import GPTSearchPage from './GPTSearchPage';

const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();

    const showGPTSearch = useSelector(store => store.gpt.showGPTSearch);

    return (
        <div>
            <Header />
            {showGPTSearch ?
                (<GPTSearchPage />) :
                (
                    <><MainContainer />
                        <SecondaryContainer /></>
                )}

        </div>
    );
}

export default Browse;
