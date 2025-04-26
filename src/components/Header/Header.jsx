import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getGenres } from '../../store/Slices/genreSlice'
import { MdLocalMovies } from "react-icons/md";
import { AnimatePresence, motion } from 'framer-motion';
import style from './Header.module.css'
import { changeLanguage } from '../../store/Slices/globalSlice';

const Header = () => {

    const dispatch = useDispatch()
    const { genres } = useSelector(state => state.Genre)
    const { language } = useSelector(state => state.Global)

    const [isGenre, setIsGenre] = useState(false)

    useEffect(() => {
        dispatch(getGenres({ language }))
    }, [language, dispatch])

    return (
        <header>
            <MdLocalMovies />
            <div className={style.btns}>
                <button className={style.btn}>Home</button>
                <button className={style.btn}>Movies</button>
                <button className={style.btn} onClick={() => setIsGenre(!isGenre)}>Genres</button>
            </div>
            <AnimatePresence>
                {isGenre && (
                    <motion.div
                        className={style.genresContainer}
                        initial={{ opacity: 0, y: -10, x: '-50%' }}
                        animate={{ opacity: 1, y: 0, x: '-50%' }}
                        exit={{ opacity: 0, y: -10, x: '-50%' }}
                        transition={{ duration: 0.3 }}
                    >
                        {genres.map(el => (
                            <button key={el.id} className={style.genrebtn}>
                                {el.name}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
            <select name="language" onChange={(e) => dispatch(changeLanguage(e.target.value))}>
                <option value="en-Us">EN</option>
                <option value="ru-RU">RU</option>
            </select>
        </header>
    )
}

export default Header