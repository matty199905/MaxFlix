import React, { useEffect, useState } from 'react'
import MovieCard from '../MovieCard/MovieCard'
import BtnPages from '../../UI/BtnPages'
import { getDiscoverData } from '../../../Axios/apiData'
import { getTvData } from '../../../Axios/apiData'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { selectedFilter } from '../../../Redux/Generos/generosSlice'
import RenderSearched from '../RenderSearched/RenderSearched'



const MoviesContainer = ({ title, peliculasHome, seriesHome, home, peliculasPage, seriesPage, searchPage, carousel }) => {

    const { activeFilter } = useSelector(state => state.generos)

    const dispatch = useDispatch()

    const location = useLocation()
    const page = (pathname) => { return location.pathname === pathname }


    const [movies, setMovies] = useState([])
    const [series, setSeries] = useState([])

    const [currentPage, setCurrentPage] = useState()
    const [currentPageValue, setCurrentPageValue] = useState(1)
    const [totalMovieResults, setTotalMoviesResults] = useState()
    const [totalTvResults, setTotalTvResults] = useState()

    const [nextPage, setNextPage] = useState()
    const [prevPage, setPrevPage] = useState()




    useEffect(() => { getDiscoverData(currentPage ? currentPage : 1).then((data) => setMovies(data.results)) }, [currentPage])

    useEffect(() => { getTvData(currentPage ? currentPage : 1).then((data) => setSeries(data.results)) }, [currentPage])

    useEffect(() => {
        getDiscoverData(currentPage ? currentPage : 1)?.then((data) => setCurrentPage(data.page)) ||
            getTvData(currentPage ? currentPage : 1)?.then((data) => setCurrentPage(data.page))
    }, [currentPage])


    useEffect(() => {
        getDiscoverData(currentPage ? currentPage : 1)?.then((data) => setTotalMoviesResults(data.total_pages))
    }, [currentPage])

    useEffect(() => {
        getTvData(currentPage ? currentPage : 1)?.then((data) => setTotalTvResults(data.total_pages))
    }, [currentPage])


    useEffect(() => {
        setCurrentPageValue(currentPage);
      }, [currentPage]);
    


    const renderByFilter = () => {

        const movieGenres = [
            ['Action', 28],
            ['Drama', 18],
            ['Adventure', 12],
            ['Crime', 80],
            ['Horror', 27],
            ['Romance', 10749],
            ['Science Fiction', 878],
            ['Thriller', 53]
        ];

        const seriesGenres = [
            ['Action & Adventure', 10759],
            ['Drama', 18],
            ['Comedy', 35],
            ['Reality', 10764],
            ['Romance', 10749],
            ['Sci-Fi & Fantasy', 10765]
        ]


        const movieMatch = movieGenres.find((genres) =>  genres.find((genre) => { if (genre === activeFilter?.name) { return genres } }))

        const tvMatch = seriesGenres.find((genres) =>  genres.find((genre) => { if (genre === activeFilter?.name) { return genres } }))



        if (movieMatch && page('/movie')) { return movies.map((movie) => { return movie.genre_ids.map((id) => { if (id === movieMatch[1]) { return <MovieCard {...movie} key={movie.id} size={'220px'} /> } }) }) }



        if (tvMatch && page('/tv')) { return series.map((serie) => { return serie.genre_ids.map((id) => { if (id === tvMatch[1]) { return <MovieCard {...serie} key={serie.id} size={'220px'} /> } }) }) }


    }



    const handlePageSubmit = (e) => {
        e.preventDefault();
        
        
        const newPage = parseInt(currentPageValue, 10);
        if(currentPage >= 501){window.alert("Numero de páginas excedido. Pruebe menos de 500."); return setCurrentPage(1)}
       else if (!isNaN(newPage)) {
          try {

            setCurrentPage(newPage);
          } catch (error) {
            console.log(error);
            
          }
        } else {
   
          window.alert("Por favor, ingresa un número válido.");
          return setCurrentPage(1)
        }

      };







    return (
        <div className='container mt-5 mb-5'>
            <div className="row">
                <div className="col-12 d-flex flex-column align-items-center ">

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


                    <div className="d-flex me-1 flex-row gap-3 align-items-start flex-wrap movie-container w-100">



                        {
                            peliculasHome &&

                            movies.map((movie, index) => {
                                if (index <= 4) {
                                    return <MovieCard {...movie} key={movie.id} size={'220px'} type={'movie'} carousel={carousel} />
                                }
                            })
                        }

                        {
                            seriesHome &&

                            series.map((serie, index) => {
                               

                                if (index <= 4) {
                                    return <MovieCard {...serie} key={serie.id} size={'220px'} type={'tv'} carousel={carousel} />
                                }
                            })
                            




                        }

                        {


                            (peliculasPage && !activeFilter) ?

                                movies.map((movie) => {

                                    return <MovieCard {...movie} key={movie.id} size={'220px'} type={'movie'} />
                                }) : null


                        }

                        {

                            ((peliculasPage || seriesPage) && activeFilter) && renderByFilter()

                        }

                        {
                            seriesPage &&

                            series.map((serie) => {

                                return <MovieCard {...serie} key={serie.id} size={'220px'} type={'tv'} />

                            })

                        }

                        {

                            searchPage && <RenderSearched />


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


                                <form onSubmit={handlePageSubmit}>

                                    <input className='btn text-light btn-sm border-2 btn-outline-primary p-2 ps-3 pe-3 rounded-2'
                                    style={{maxWidth:'100px'}}
                                    value={currentPageValue}
                                    onChange={(e) => setCurrentPageValue(e.target.value)} 
                                    onKeyDown={(e)=>{if(e.key === 'Enter'){setCurrentPage(currentPageValue) ;
                                    
                                     }}}
                                    />


                                   
                                </form>



                                <BtnPages onClick={() => {
                                    setNextPage(setCurrentPage(currentPage + 1));
                                    window.scroll(0, 0)

                                }}>
                                    Siguiente

                                </BtnPages>


                            </div>



                            <div className='d-flex flex-column align-items-center'>
                                <p className='text-warning'>Ingrese Número de Página </p>
                                <p className='fs-5 fw-light'>
                                    { peliculasPage ?
 `Resultado total de Películas: ${totalMovieResults}` : `Resultado total de Series: ${totalTvResults}`
                                    }
                                   
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
