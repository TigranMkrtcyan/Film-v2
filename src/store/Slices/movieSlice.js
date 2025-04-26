import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import FilmAPI from "../../api/api";

export const getMovieThunk = createAsyncThunk(
    "getMovieThunk",
    async ({ language, pageCount }) => {
        const res = await FilmAPI.getMovies(language, pageCount)

        return res.data
    }
)

export const getOneMovieThunk = createAsyncThunk(
    "getOneMovieThunk",
    async ({ language, id }) => {
        const res = await FilmAPI.getOneMovie(language, id)

        return res.data
    }
)

export const getSearch = createAsyncThunk(
    "getSearch",
    async (text) => {
        const res = await FilmAPI.search(text)

        return res.data.results
    }
)

const movieSilce = createSlice({
    name: "movieSilce",
    initialState: {
        movies: [],
        movie: [],
        searchMovie: [],
        text: '',
        loading: false,
    },
    reducers: {
        changeText(state, action) {
            state.text = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getMovieThunk.fulfilled, (state, action) => {
            state.movies = action.payload.results
        })
        builder.addCase(getOneMovieThunk.fulfilled, (state, action) => {
            state.movie = action.payload
        })
        builder.addCase(getSearch.fulfilled, (state, action) => {
            state.searchMovie = action.payload
        })
    }
})

export const {changeText} = movieSilce.actions
export default movieSilce.reducer