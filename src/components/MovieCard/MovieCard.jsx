import style from './MovieCard.module.css'

import { IoEye } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const MovieCard = ({ el }) => {

    return (
        <NavLink to={`/movie/${el.id}`} className={style.ganre}>
            <img src={`https://image.tmdb.org/t/p/w300/${el.poster_path}`} alt='' className={style.poster}/>
            <h2 className={style.h3}>{el.title}</h2>
            <div className={style.information}>
                <h3><IoEye /> {el.popularity}</h3>
                <h3><MdOutlineDateRange /> {el.release_date}</h3>
            </div>
        </NavLink>
    )
}

export default MovieCard