import React, { useEffect, useState } from 'react'
import CarouselContainer from '../../Components/Movies/MoviesContainer/CarouselContainer'
import { HomeWrapper } from './HomeStyled'
import Hero from '../../Components/Hero/Hero'
import MoviesContainer from '../../Components/Movies/MoviesContainer/MoviesContainer'
import { getPopular } from '../../Axios/apiData';
import { IMAGE_URL } from '../../constants';


const Home = () => {



  const [movies, setMovies] = useState([]);
  const [randomMovie, setRandomMovie] = useState({})

  useEffect(() => { getPopular().then((data) => setMovies(data.results)) }, []);

  


  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * movies.length); 
    setRandomMovie(movies[randomIndex]) }, [movies])






  return (

    <HomeWrapper>

      <Hero img={`url(${IMAGE_URL + randomMovie?.poster_path})`}
        title={randomMovie?.title}
        year={randomMovie?.release_date?.slice(0, 4)}
        overview={randomMovie?.overview}
        id={randomMovie?.id}
        home={true}
        data={{ ...randomMovie }} />

      <CarouselContainer title='Próximamente' id='carousel-peliculas' carousel={true} />

      <MoviesContainer title='Ver Películas en MaxFlix' home={true} peliculasHome={true} carousel={false}   />

      <MoviesContainer title='Ver Series en MaxFlix' home={true} seriesHome={true} carousel={false}   />



    </HomeWrapper>



  )
}

export default Home
