import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGPTSearch: false,
        movieResults: null,
        movieDetailsArray: null,
    },
    reducers: {
        toggleGPTSearch: (state) => {
            state.showGPTSearch = !state.showGPTSearch
        },
        updateMovies: (state, action) => {
            const {movieResults, movieDetailsArray} = action.payload;
            state.movieResults = movieResults;
            state.movieDetailsArray = movieDetailsArray;
        }
    }
})

export const { toggleGPTSearch, updateMovies } = gptSlice.actions;
export default gptSlice.reducer;