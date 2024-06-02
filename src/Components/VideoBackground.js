import React from 'react';
import { useSelector } from 'react-redux';
import useGetTrailerVideo from '../hooks/useGetTrailerVideo';

const VideoBackground = ({movieId}) => {
    useGetTrailerVideo(movieId);

    const trailerVideo = useSelector(store => store.movie?.trailerVideo)

    
    return (
        <div >
            <iframe className='w-screen aspect-video'
            src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin"></iframe>
        </div>
    );
}

export default VideoBackground;