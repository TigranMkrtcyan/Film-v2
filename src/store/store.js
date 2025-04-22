import { configureStore } from "@reduxjs/toolkit";
import genreSlice from "./Slices/genreSlice"
import globalSlice from "./Slices/globalSlice"

const store = configureStore({
    reducer : {
        Genre : genreSlice,
        Global : globalSlice
    }
})

export default store