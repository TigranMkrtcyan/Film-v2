import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import FilmApi from "../../api/api";

export const getGenres = createAsyncThunk(
    "getgenres",
    async ({ language }) => {
        const res = await FilmApi.getGenres(language)

        return res.data.genres
    }
)

const genreSlice = createSlice({
    name: "genreSlice",
    initialState: {
        genres: []
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getGenres.fulfilled, (state, action) => {
            state.genres = action.payload
        })
    }
})

export default genreSlice.reducer