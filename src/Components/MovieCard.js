import React, { useEffect, useState } from "react";
import { API_OPTION, IMG_CDN } from "../Utils/constants";
import MovieInfoModal from "./MovieInfoModal";
import { useDispatch } from "react-redux";
import { setSelectedMovie } from "../Utils/movieSlice";

const MovieCard = ({ movie }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const openModal = () => {
    setIsOpen(true);
    dispatch(setSelectedMovie(movie))
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="w-[20vw] md:w-[10vw] mr-3">
        <img
          className="md:h-[30vh] h-[15vh]"
          src={IMG_CDN + movie.poster_path}
          alt="movie poster"
          onClick={openModal}
        />
      </div>
      <MovieInfoModal isOpen={isOpen} onClose={closeModal} movie={movie} />
    </>
  );
};

export default MovieCard;
