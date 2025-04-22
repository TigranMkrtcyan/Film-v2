import axios from "axios";

const apiKey = "f36f23edf6e10fd2ddcf939916b1f67a"

const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3"
}) 

const FilmApi = {
    getGenres(language) {
        return instance.get(`/genre/movie/list?api_key=${apiKey}&language=${language}`)
    },
    getMovies(language,pageCount) {
        return instance.get(`/discover/movie?api_key=${apiKey}&language=${language}&page=${pageCount}`)
    },
    getGenreMovie(language,genreId,pageCount) {
        return instance.get(`/discover/movie?api_key=${apiKey}&language=${language}&with_genres=${genreId}&page=${pageCount}`)
    },
    getOneMovie(language,id) {
        return instance.get(`/movie/${id}?api_key=${apiKey}&language=z${language}`)
    },
    getSerch(text) {
        return instance.get(`search/movie?api_key=${apiKey}&query=${text}`)
    }
}

export default FilmApi