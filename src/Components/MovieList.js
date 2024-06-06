import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, moviesList }) => {
  return (
    <div className="ml-5 md:ml-10">
      <h1 className="text-lg md:text-2xl my-4">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide">
        <div className="flex">
          {moviesList?.map(
            (movie) =>
              movie.poster_path && (
                <MovieCard key={movie.id} movie={movie} />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
