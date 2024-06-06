import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../Utils/movieSlice";
import { API_OPTION } from "../Utils/constants";

const useGetTrailerVideo = (movieId) => {console.log(movieId);
  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTION
    );
    const json = await data.json();
    const filteredData = json.results?.filter(
      (item) => item.type === "Trailer"
    );
    const trailer = filteredData.length ? filteredData[0] : json.result[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideo();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);
};

export default useGetTrailerVideo;
