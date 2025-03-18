import React from 'react'
import Hero from '../../Components/Hero/Hero'
import { DinamicPageWrapper} from './PaginaDinamicaStyled'
import { useLocation } from 'react-router-dom'
import { IMAGE_URL } from '../../constants'






const PaginaDinamica = () => {

  const location = useLocation()

  const cardData = location?.state?.data

  const homeData = location?.state?.data

const movieType = cardData.original_title ? location.pathname.slice(1,6) : null
const tvType = cardData?.original_name ? location.pathname.slice(1,3) : null


  return (

    <DinamicPageWrapper>

      <Hero title={(cardData?.original_title || cardData?.original_name) || homeData?.original_title}
        overview={cardData?.overview || homeData?.overview}
        imgDinamicPage ={`url(${IMAGE_URL + (cardData?.backdrop_path || homeData?.poster_path )})`}
        id={cardData?.id || homeData?.id}
        home={false}
        type={movieType || tvType}
      />

    

    </DinamicPageWrapper>

  )
}

export default PaginaDinamica
