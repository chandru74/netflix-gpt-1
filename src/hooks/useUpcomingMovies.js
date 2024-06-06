import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTION } from "../Utils/constants";
import { addUpcomingMovies } from "../Utils/movieSlice";

const UseUpcomingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getUpcomingMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTION
    );
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };
};

export default UseUpcomingMovies;
