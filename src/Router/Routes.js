import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Peliculas from '../Pages/Peliculas/Peliculas'
import Home from '../Pages/Home/Home'
import Series from '../Pages/Series/Series'
import PaginaDinamica from '../Pages/PaginaDinamica/PaginaDinamica'
import CarouselContainer from '../Components/Movies/MoviesContainer/CarouselContainer'
import SearchResults from '../Pages/SearchResults/SearchResults'



const RoutesApp = () => {



  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movie' element={<Peliculas />} />
      <Route path='/tv' element={<Series />} />
      <Route path='/:type/:dinamicTitle' element={<PaginaDinamica />} />
      <Route path='/searchResults' element={<SearchResults/>}/>

      <Route path='/movie/proximamente'>
        <Route index element={<CarouselContainer/>}/>
        <Route path=':proximamenteDinamicTitle' element={<PaginaDinamica/>} />
      </Route>

    </Routes>
  )
}

export default RoutesApp
