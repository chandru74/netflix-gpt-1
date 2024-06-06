import React, { useState } from "react";
import MovieInfoModal from "./MovieInfoModal";

const VideoTitle = ({ title, overview, movie }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="w-1/2 md:w-1/4 absolute top-[10vh] md:top-[30vh] left-10  text-white">
        <h1 className="font-bold md:text-2xl">{title}</h1>
        <p className="hidden md:block">{overview}</p>
        <div className="mt-4 flex">
          <button className="w-1/3 md:px-2 md:py-4 bg-gray-200 text-black bg-opacity-80 rounded-lg">
            Play
          </button>
          <button
            className="mx-2 w-1/3 md:px-2 md:py-4 bg-gray-600 text-white rounded-lg"
            onClick={openModal}
          >
            More Info
          </button>
        </div>
      </div>
      <MovieInfoModal isOpen={isOpen} onClose={closeModal} movie={movie} />
    </>
  );
};

export default VideoTitle;
