import style from './HomeSlider.module.css'


const HomeSlider = ({ el }) => {

    return (
        <div className={style.slide}>
            <img src={`https://image.tmdb.org/t/p/w500/${el.backdrop_path}`} className={style.poster} alt="" />
            <h1 className={style.h1}>{el.title}</h1>
        </div>
    )
}

export default HomeSlider