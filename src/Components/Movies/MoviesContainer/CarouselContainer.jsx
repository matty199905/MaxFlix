import React, { useEffect, useState } from 'react'
import MovieCard from '../MovieCard/MovieCard'
import { getUpComing } from '../../../Axios/apiData'

const CarouselContainer = ({ title, id }) => {

    const [movies, setMovies] = useState([])

    useEffect(() => { getUpComing().then((data) => setMovies(data.results)) }, [])

 

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 mb-5 ">

                    <div className="container-fluid d-flex ">
                        <div className="row">
                            <div className="col-12 d-flex justify-content-start align-items-center gap-4 mt-4">



                                <h3 className="fs-4 fw-bold mt-2 ms-3">{title}</h3>




                                <div className="container">
                                    <div className="row">
                                        <div className="col">

                                            <button className="carousel-controls-prev bg-transparent border-0" style={{ scale: '0.7' }} type='button' data-bs-target={`#${id}`} data-bs-slide='prev'>
                                                <span className="carousel-control-prev-icon" aria-hidden='true'></span>
                                                <span className="visually-hidden"></span>
                                            </button>




                                            <button className="carousel-controls-next bg-transparent border-0 me-4" type='button' style={{ scale: '0.7' }} data-bs-target={`#${id}`} data-bs-slide='next'>
                                                <span className="carousel-control-next-icon" aria-hidden='true'></span>
                                                <span className="visually-hidden"></span>
                                            </button>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>


                    <div className="container">
                        <div className="row">
                            <div className="col mb-5">

                                <div className="carousel slide" id={id}data-bs-ride="carousel">

                                    <div className="carousel-inner">

                                        <div className="container carousel-item active">
                                            <div className="row">
                                                <div className="col d-flex">

                                                    {


                                                        movies.map((movie, index) => {
                                                            if (index < 6) {
                                                                return <MovieCard {...movie} key={movie.id} size={'200px'} carousel={true} />
                                                            }
                                                        })
                                                    }


                                                </div>
                                            </div>
                                        </div>


                                        <div className="container carousel-item">
                                            <div className="row">
                                                <div className="col d-flex">

                                                    {

                                                        movies.map((movie, index) => {
                                                            if (index > 6 && index <= 12) {
                                                                return <MovieCard {...movie} key={movie.id} size={'200px'}  carousel={true}/>
                                                            }
                                                        })
                                                    }

                                                </div>
                                            </div>
                                        </div>



                                        <div className="container carousel-item">
                                            <div className="row">
                                                <div className="col d-flex">

                                                    {

                                                        movies.map((movie, index) => {
                                                            if (index > 12 && index <= 18) {
                                                                return <MovieCard {...movie} key={movie.id} size={'200px'} carousel={true} />
                                                            }
                                                        })
                                                    }

                                                </div>
                                            </div>
                                        </div>

                                        
                                        


                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>



                </div>

            </div>
        </div>

    )
}

export default CarouselContainer
