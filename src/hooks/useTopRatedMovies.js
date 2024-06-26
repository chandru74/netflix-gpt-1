import { useEffect } from "react";
import { API_OPTION } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../Utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getTopRatedMovies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTION
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };
};

export default useTopRatedMovies;
