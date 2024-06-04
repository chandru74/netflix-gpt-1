import React from 'react';
import GPTSearchBar from './GPTSearchBar';
import GPTMovieSuggestion from './GPTMovieSuggestion';
import { BACKGROUND_IMAGE } from '../Utils/constants';

const GPTSearchPage = () => {
    return (
        <div>
            <div className='fixed -z-50 bg-opacity-90'>
                <img className='md:w-screen h-screen object-cover' src={BACKGROUND_IMAGE} alt="banner-image" />
            </div>
            <GPTSearchBar />
            <GPTMovieSuggestion />
        </div>
    );
}

export default GPTSearchPage;
