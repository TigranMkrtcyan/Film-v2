import { useDispatch, useSelector } from 'react-redux'

import style from './Movies.module.css'
import { useEffect } from 'react'
import { getMovieThunk } from '../../store/Slices/movieSlice'
import MovieCard from '../MovieCard/MovieCard'

const Movies = () => {
    const dispatch = useDispatch()
    const { movies } = useSelector(state => state.Movie)
    const { language } = useSelector(state => state.Global)

    useEffect(() => {
        dispatch(getMovieThunk({
            language,
            pageCount: 1
        }))
    }, [language])
    
    return (
        <div className={style.movies}>
            {
                movies.map((el) => {
                    return <MovieCard el={el} key={el.id}/>
                })
            }
        </div>
    )
}

export default Movies