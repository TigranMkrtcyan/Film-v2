import { configureStore } from "@reduxjs/toolkit";
import genreSlice from "./Slices/genreSlice"
import globalSlice from "./Slices/globalSlice"
import movieSlice from "./Slices/movieSlice"

const store = configureStore({
    reducer : {
        Genre : genreSlice,
        Global : globalSlice,
        Movie : movieSlice
    }
})

export default store