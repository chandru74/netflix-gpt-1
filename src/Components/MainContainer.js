import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);
  const selectedMovie = useSelector((store) => store.movie?.selectedMovie);
  if (!movies) return;
  const { title, overview, id } = selectedMovie ? selectedMovie : movies[0];
  console.log(title, id)
  return (
    <div>
      <VideoTitle
        title={title}
        overview={overview}
        movie={selectedMovie ? selectedMovie : movies[0]}
      />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
