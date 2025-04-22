import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getGenres } from '../../store/Slices/genreSlice'
import { MdLocalMovies } from "react-icons/md";

import style from './Home.module.css'
import { changeLanguage } from '../../store/Slices/globalSlice';

const Home = () => {
    const dispatch = useDispatch()
    const { genres } = useSelector(state => state.Genre)
    const { language } = useSelector(state => state.Global)

    const [isGenre, setIsGenre] = useState(false)

    useEffect(() => {
        dispatch(getGenres({language}))
    }, [language])

    console.log(language);
    
    return (
        <header>
            <MdLocalMovies />
            <div className={style.btns}>
                <button className={style.btn}>Home</button>
                <button className={style.btn}>Movies</button>
                <button className={style.btn} onClick={() => setIsGenre(!isGenre)}>Genres</button>
            </div>
            {isGenre && (
                <div className={style.genresContainer}>
                    {genres.map(el => (
                        <button key={el.id} className={style.genrebtn}>
                            {el.name}
                        </button>
                    ))}
                </div>
            )}
                    <select name="language" onChange={(e) => dispatch(changeLanguage(e.target.value))}>
                    <option value="en-Us">EN</option>
                    <option value="ru-RU">RU</option>
                </select>
        </header>
    )
}

export default Home