import { useEffect } from "react";
import { API_OPTION } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../Utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getPopularMovies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTION
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };
};

export default usePopularMovies;
