import React, { useEffect, useState } from 'react'
import MovieCard from '../MovieCard/MovieCard'
import { getUpComing } from '../../../Axios/apiData'

const CarouselContainer = ({ title, id, carousel }) => {

    const [movies, setMovies] = useState([])

    useEffect(() => { getUpComing().then((data) => setMovies(data.results)) }, [])



    const [itemsPerSlide, setItemsPerSlide] = useState(6);


    useEffect(() => {

        const handleResize = () => {
            if (window.innerWidth <= 520) {
                setItemsPerSlide(1)
            }
            else if (window.innerWidth <= 990) {
                setItemsPerSlide(2);
            }
            else if (window.innerWidth <= 1200) {
                setItemsPerSlide(3);
            }
            else if (window.innerWidth <= 1250) {
                setItemsPerSlide(4)
            }
            else {
                setItemsPerSlide(4);
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);

      
        return () => {
            window.removeEventListener("resize", handleResize);

            
        }}, []);



    const chunkMovies = (movies, size) => {
        let chunks = [];
        for (let i = 0; i < movies.length; i += size) {
            chunks.push(movies.slice(i, i + size));
        }
        return chunks;
    };
  

    const movieChunks = chunkMovies(movies, itemsPerSlide);



    return (
        <div className="container">
            <div className="row">
                <div className="col-12 mb-5">

                    <div className="container-fluid d-flex">
                        <div className="row">
                            <div className="col-12 d-flex justify-content-start align-items-center gap-3 mt-4 mb-4">

                                <h3 className="fs-4 fw-bold mt-2 ms-3">{title}</h3>

                                <div className="container">
                                    <div className="row">
                                        <div className="col">

                                           
                                            <button
                                                className="carousel-controls-prev bg-transparent border-0 m-0 p-0"
                                                style={{ scale: '0.7' }}
                                                type='button'
                                                data-bs-target={`#${id}`}
                                                data-bs-slide='prev'
                                            >
                                                <span className="carousel-control-prev-icon" aria-hidden='true'></span>
                                                <span className="visually-hidden">Previous</span>
                                            </button>

                                            
                                            <button
                                                className="carousel-controls-next bg-transparent border-0 p-0 m-0"
                                                type='button'
                                                style={{ scale: '0.7' }}
                                                data-bs-target={`#${id}`}
                                                data-bs-slide='next'
                                            >
                                                <span className="carousel-control-next-icon" aria-hidden='true'></span>
                                                <span className="visually-hidden">Next</span>
                                            </button>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                    {/* Carrusel */}
                    <div id={id} className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {movieChunks.map((chunk, index) => (
                                <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                    <div className="row justify-content-center">
                                        {chunk.map((movie, i) => (
                                            <div key={movie.id} className="col-auto movie-card">
                                                <MovieCard {...movie} key={movie.id} size={'220px'} carousel={carousel} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default CarouselContainer
