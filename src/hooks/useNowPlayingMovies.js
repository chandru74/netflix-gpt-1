import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTION } from "../Utils/constants";
import { addNowPlayingMovies } from "../Utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getNowPlayingMovieList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getNowPlayingMovieList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTION
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };
};

export default useNowPlayingMovies;
