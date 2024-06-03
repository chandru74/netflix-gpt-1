import React from 'react';
import { IMG_CDN } from '../Utils/constants';

const MovieCard = ({posterPath}) => {
    return (
        <div className='w-[10vw] mr-3'>
            <img src={IMG_CDN + posterPath}  alt="movie poster" />
        </div>
    );
}

export default MovieCard;
