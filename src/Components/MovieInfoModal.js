import React, { useEffect, useState } from "react";
import { API_OPTION, IMG_CDN} from "../Utils/constants";

const MovieInfoModal = ({ isOpen, onClose, movie }) => {
  const [movieInfo, setMovieInfo] = useState(null);
  useEffect(() => {
    if (isOpen) {
      getMovieDetails();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const getMovieDetails = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movie.id + "?language=en-US",
      API_OPTION
    );
    const json = await data.json();
    setMovieInfo(json);
  };

  return (
    isOpen &&
    movieInfo && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-y-auto">
        <div className="bg-black pt-8 rounded-lg shadow-lg w-11/12 md:w-1/2  relative">
          <button
            className="absolute top-0 right-2 text-white hover:text-gray-700 text-3xl"
            onClick={onClose}
          >
            &times;
          </button>
          <div className="flex flex-col md:flex-row">
            <div className="w-1/2">
              <img
                className="w-fit"
                src={IMG_CDN + movieInfo?.poster_path}
                alt="backdrop"
              />
            </div>
            <div className="w-1/2 text-white m-2">
              <h1 className="font-bold text-2xl p-2">
                {movieInfo?.title} : {movieInfo?.tagline}
              </h1>
              <div className="flex font-sans text-xl p-2 flex-col gap-1">
                <p>{movieInfo?.release_date}</p> 
                <p className="flex flex-wrap">{movieInfo?.genres?.map((genre) => genre.name + ", ")}</p>
                <p>{movieInfo?.runtime + " mins"}</p>
                <p>{movieInfo?.vote_average}</p>
              </div>
              <p className=" font-sans text-xl p-2">{movieInfo?.overview}</p>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default MovieInfoModal;
