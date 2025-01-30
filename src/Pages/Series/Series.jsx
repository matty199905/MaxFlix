import React from 'react'
import { SeriesWrapper } from './SeriesStyled'
import MoviesContainer from '../../Components/Movies/MoviesContainer/MoviesContainer'
import {useSelector} from 'react-redux'


const Series = () => {

  const {activeFilter} = useSelector(state => state.generos)



  return (
<SeriesWrapper>

<MoviesContainer title={activeFilter?.name ? `Ver Series de ${activeFilter.name} en MaxFlix` : 'Ver Series en MaxFlix'} seriesPage={true}>
    
</MoviesContainer>

</SeriesWrapper>
  )
}

export default Series
