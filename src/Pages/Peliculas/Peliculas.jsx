import React from 'react'
import { PeliculasWrapper } from './PeliculasStyled'
import MoviesContainer from '../../Components/Movies/MoviesContainer/MoviesContainer'
import {useSelector} from 'react-redux'

const Peliculas = () => {

  const {activeFilter} = useSelector(state => state.generos)

  return (
<PeliculasWrapper>

<MoviesContainer title={activeFilter?.name ? `Ver Peliculas de ${activeFilter.name} en MaxFlix` : 'Ver Peliculas en MaxFlix'} peliculasPage={true} />
    


</PeliculasWrapper>
  )
}

export default Peliculas
