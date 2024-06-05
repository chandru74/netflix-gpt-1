import React, { useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTION, GEMINI_API_KEY } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { updateMovies } from "../Utils/gptSlice";

const GPTSearchBar = () => {
  const searchText = useRef();
  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
  const dispatch = useDispatch();

  const searchMovie = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTION
    );
    const json = await data.json();
    return json.results;
  };
  const handleGPTSearch = async () => {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const searchQuery =
      "As a movie recommendation system, suggest top 5 movies based on query:" +
      searchText.current.value +
      ". With comma seperated as shown in example. Example as: Don, Mad max, Razz, OM, Victory.";
    const result = await model.generateContent(searchQuery);
    const response = await result.response;
    const text = response.text();
    const resultsArray = text.split(",");

    const movieDetailsPromiseArray = await resultsArray?.map((movie) =>
      searchMovie(movie)
    );
    const movieDetailsArray = await Promise.all(movieDetailsPromiseArray);
    dispatch(
      updateMovies({
        movieResults: resultsArray,
        movieDetailsArray: movieDetailsArray,
      })
    );
  };
  return (
    <div className="relative top-[16vh] flex justify-center z-50">
      <form className="md:w-7/12 m-2" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          placeholder="What do you want watch today?"
          className="md:w-[40vw] w-4/5 p-2 md:p-4 md:m-4 md:rounded-lg"
        />
        <button
          className="bg-red-800 text-white md:w-[10vw] w-1/5 p-2 md:p-4 md:my-4 md:rounded-lg"
          onClick={handleGPTSearch}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
