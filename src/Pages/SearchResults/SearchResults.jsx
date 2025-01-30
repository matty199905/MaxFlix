import React from 'react'
import { SearchResultsWrapper } from './searchResultsStyled'
import MoviesContainer from '../../Components/Movies/MoviesContainer/MoviesContainer'
import { useSelector } from 'react-redux'

const SearchResults = () => {

  const {value} = useSelector(state => state.searchValue)

  return (
<SearchResultsWrapper>
 
<MoviesContainer title={`Resultados que coinciden con: "${value}" `} searchPage={true} />


</SearchResultsWrapper>
  )
}

export default SearchResults
