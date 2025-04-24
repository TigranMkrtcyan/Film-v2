import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieThunk } from '../../store/Slices/movieSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import style from './Home.module.css'

import HomeSlider from '../../components/sliders/HomeSlider/HomeSlider';

const Home = () => {
    const dispatch = useDispatch()
    const { movies } = useSelector(state => state.Movie)
    const { language } = useSelector(state => state.Global)

    useEffect(() => {
        dispatch(getMovieThunk({
            language,
            pageCount: 1
        }))
    }, [language])

    console.log(movies);

    return (
        <div className={style.home}>
            <Swiper
                spaceBetween={50}
                slidesPerView={2}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                modules={[Autoplay, Navigation]}
            >
                {
                    movies.map((el) => {
                        return <SwiperSlide><HomeSlider el={el} /></SwiperSlide>
                    })
                }
            </Swiper>
        </div>
    )
}

export default Home