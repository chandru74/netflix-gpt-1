import React from 'react';

const VideoTitle = ({title, overview}) => {
    return (
        <div className='w-1/4 absolute top-[50vh] left-10  text-white'>
            <h1 className='font-bold text-2xl'>{title}</h1>
            <p>{overview}</p>
            <div className='mt-4'>
                <button className='w-1/3 px-2 py-4 bg-gray-200 text-black bg-opacity-80 rounded-lg'>Play</button>
                <button  className='mx-2 w-1/3 px-2 py-4 bg-gray-400 text-white rounded-lg'>More Info</button>
            </div>
        </div>
    );
}

export default VideoTitle;
