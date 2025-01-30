import React, { useEffect, useState } from 'react'
import MovieCard from '../MovieCard/MovieCard'
import BtnPages from '../../UI/BtnPages'
import { getDiscoverData } from '../../../Axios/apiData'
import { getTvData } from '../../../Axios/apiData'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { selectedFilter } from '../../../Redux/Generos/generosSlice'
import SearchComponent from '../SearchComponent/SearchComponent'



const MoviesContainer = ({ title, peliculasHome, seriesHome, home, peliculasPage, seriesPage, searchPage }) => {

    const { activeFilter } = useSelector(state => state.generos)
    const { value } = useSelector(state => state.searchValue)

    const dispatch = useDispatch()

    const location = useLocation()
    const page = (pathname) => { return location.pathname == pathname }


    const [movies, setMovies] = useState([])
    const [series, setSeries] = useState([])

    const [currentPage, setCurrentPage] = useState()
    const [totalPages, setTotalPages] = useState()

    const [nextPage, setNextPage] = useState()
    const [prevPage, setPrevPage] = useState()




    useEffect(() => { getDiscoverData(currentPage ? currentPage : 1).then((data) => setMovies(data.results)) }, [currentPage])

    useEffect(() => { getTvData(currentPage ? currentPage : 1).then((data) => setSeries(data.results)) }, [currentPage])

    useEffect(() => {
        getDiscoverData(currentPage ? currentPage : 1)?.then((data) => setCurrentPage(data.page)) ||
            getTvData(currentPage ? currentPage : 1)?.then((data) => setCurrentPage(data.page))
    }, [currentPage])


    useEffect(() => {
        getDiscoverData(currentPage ? currentPage : 1)?.then((data) => setTotalPages(data.total_pages)) ||
            getTvData(currentPage ? currentPage : 1)?.then((data) => setTotalPages(data.total_pages))
    }, [currentPage])



    const renderByFilter = () => {

        if (activeFilter?.name === 'Drama' & page('/peliculas')) { return movies.map((movie) => { return movie.genre_ids.map((id) => { if (id == 18) { return <MovieCard {...movie} key={movie.id} size={'200px'} /> } }) }) }
        if (activeFilter?.name === 'Action') { return movies.map((movie) => { return movie.genre_ids.map((id) => { if (id == 28) { return <MovieCard {...movie} key={movie.id} size={'200px'} /> } }) }) }
        if (activeFilter?.name === 'Adventure') { return movies.map((movie) => { return movie.genre_ids.map((id) => { if (id == 12) { return <MovieCard {...movie} key={movie.id} size={'200px'} /> } }) }) }
        if (activeFilter?.name === 'Crime') { return movies.map((movie) => { return movie.genre_ids.map((id) => { if (id == 80) { return <MovieCard {...movie} key={movie.id} size={'200px'} /> } }) }) }
        if (activeFilter?.name === 'Horror') { return movies.map((movie) => { return movie.genre_ids.map((id) => { if (id == 27) { return <MovieCard {...movie} key={movie.id} size={'200px'} /> } }) }) }
        if (activeFilter?.name === 'Romance') { return movies.map((movie) => { return movie.genre_ids.map((id) => { if (id == 10749) { return <MovieCard {...movie} key={movie.id} size={'200px'} /> } }) }) }
        if (activeFilter?.name === 'Science Fiction') { return movies.map((movie) => { return movie.genre_ids.map((id) => { if (id == 878) { return <MovieCard {...movie} key={movie.id} size={'200px'} /> } }) }) }
        if (activeFilter?.name === 'Thriller') { return movies.map((movie) => { return movie.genre_ids.map((id) => { if (id == 53) { return <MovieCard {...movie} key={movie.id} size={'200px'} /> } }) }) }

        if (activeFilter?.name === 'Action & Adventure') { return series.map((serie) => { return serie.genre_ids.map((id) => { if (id == 10759) { return <MovieCard {...serie} key={serie.id} size={'200px'} /> } }) }) }
        if (activeFilter?.name === 'Drama' & page('/series')) { return series.map((serie) => { return serie.genre_ids.map((id) => { if (id == 18) { return <MovieCard {...serie} key={serie.id} size={'200px'} /> } }) }) }
        if (activeFilter?.name === 'Comedy') { return series.map((serie) => { return serie.genre_ids.map((id) => { if (id == 35) { return <MovieCard {...serie} key={serie.id} size={'200px'} /> } }) }) }
        if (activeFilter?.name === 'Reality') { return series.map((serie) => { return serie.genre_ids.map((id) => { if (id == 10764) { return <MovieCard {...serie} key={serie.id} size={'200px'} /> } }) }) }
        if (activeFilter?.name === 'Romance') { return series.map((serie) => { return serie.genre_ids.map((id) => { if (id == 10749) { return <MovieCard {...serie} key={serie.id} size={'200px'} /> } }) }) }
        if (activeFilter?.name === 'Sci-Fi & Fantasy') { return series.map((serie) => { return serie.genre_ids.map((id) => { if (id == 10765) { return <MovieCard {...serie} key={serie.id} size={'200px'} /> } }) }) }
    }




    return (
        <div className='container mt-5 mb-5'>
            <div className="row">
                <div className="col-12 d-flex flex-column align-items-center">

                    <div className="container">
                        <div className="row">
                            <div className="col d-flex flex-row gap-4 mb-4">
                                <h3 className='fs-5 fw-bold mt-2'>{title}</h3>
                                {
                                    (activeFilter !== null && (peliculasPage === true || seriesPage === true)) ? <button className="btn btn-outline-warning border-2 text-light" onClick={() => { dispatch(selectedFilter(activeFilter)) }}>Borrar Filtro</button> : null
                                }
                                {home &&
                                    <Link to={seriesHome ? 'tv' : 'movie'}
                                        className="btn btn-primary ps-3 pe-3" style={{ scale: '0.8' }}>
                                        Ver Más
                                    </Link>
                                }
                            </div>
                        </div>
                    </div>


                    <div className="d-flex flex-row justify-content-start align-items-start flex-wrap">



                        {
                            peliculasHome &&

                            movies.map((movie, index) => {
                                if (index <= 6) {
                                    return <MovieCard {...movie} key={movie.id} size={'150px'} type={'movie'} />
                                }
                            })
                        }

                        {
                            seriesHome &&

                            series.map((serie, index) => {
                                if (index <= 6) {
                                    return <MovieCard {...serie} key={serie.id} size={'150px'} type={'tv'} />
                                }
                            })




                        }

                        {


                            (peliculasPage && !activeFilter) ?

                                movies.map((movie) => {

                                    return <MovieCard {...movie} key={movie.id} size={'200px'} type={'movie'} />
                                }) : null


                        }

                        {
                            (peliculasPage || seriesPage) && renderByFilter()

                        }

                        {
                            seriesPage &&

                            series.map((serie) => {

                                return <MovieCard {...serie} key={serie.id} size={'200px'} type={'tv'} />

                            })

                        }

                        {

                            searchPage && <SearchComponent value={value}/>


                        }




                    </div>


                    {
                        (!home && !searchPage) &&

                        <div className='d-flex flex-column align-items-center gap-3'>

                            <div className="d-flex flex-row gap-2 mt-5">

                                <BtnPages onClick={() => {
                                    if (currentPage === 1) { return null }
                                    setPrevPage(setCurrentPage(currentPage - 1));
                                    window.scroll(0, 0)
                                }}>

                                    Anterior

                                </BtnPages>



                                <div className='btn text-light border-2 btn-outline-primary p-2 ps-3 pe-3 rounded-2'>

                                    {currentPage}

                                </div>




                                <BtnPages onClick={() => {
                                    setNextPage(setCurrentPage(currentPage + 1));
                                    window.scroll(0, 0)

                                }}>
                                    Siguiente

                                </BtnPages>


                            </div>



                            <div className='d-flex'>
                                <p className='fs-5 fw-light'>
                                    Resultados: <span>{totalPages}</span>
                                </p>
                            </div>

                        </div>
                    }
                </div>
            </div>

        </div>
    )
}

export default MoviesContainer
