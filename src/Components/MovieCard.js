import React from "react";
import { IMG_CDN } from "../Utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-[20vw] md:w-[10vw] mr-3">
      <img
        className="md:h-[30vh] h-[15vh]"
        src={IMG_CDN + posterPath}
        alt="movie poster"
      />
    </div>
  );
};

export default MovieCard;
