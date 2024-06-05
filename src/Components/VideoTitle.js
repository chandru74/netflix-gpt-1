import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-1/2 md:w-1/4 absolute top-[10vh] md:top-[30vh] left-10  text-white">
      <h1 className="font-bold md:text-2xl">{title}</h1>
      <p className="hidden md:block">{overview}</p>
      <div className="mt-4 flex">
        <button className="w-1/3 md:px-2 md:py-4 bg-gray-200 text-black bg-opacity-80 rounded-lg">
          Play
        </button>
        <button className="mx-2 w-1/3 md:px-2 md:py-4 bg-gray-600 text-white rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
