import React from 'react'
import { IMAGE_URL } from '../../../constants'
import { CardLink } from './MovieCardStyled'
import { useLocation } from 'react-router-dom'









const MovieCard = ({ size, title, release_date, poster_path, carousel, name, first_air_date, onClick, type, ...data }) => {



    const location = useLocation()
    const page = (pathname) => location.pathname === pathname




    return (

        <>
            {page('/movie') &&

                <CardLink state={{ data: { ...data } }} to={`${title}`} className="card border-0 bg-transparent m-2" style={{ width: `${size}` }} onClick={() => { window.scroll(0, 0); }}>
                    <div className='responsive'>
                        <div className="card-body p-0">

                            <img src={`${IMAGE_URL + poster_path}`} alt={title} className="card-img-top rounded-4 responsive-img" />

                        </div>
                        <div className="card-footer p-1 mt-2 responsive-footer">
                            <div className="card-title">
                                <h3 className='h6 text-light fw-normal'>{title || name}</h3>
                            </div>
                            <div className="card-subtitle text-light fw-lighter">{release_date || first_air_date}
                            </div>
                        </div>
                    </div>
                </CardLink>
            }

            {page('/tv') &&

                <CardLink state={{ data: { ...data } }} to={`${name}`} className="card border-0 bg-transparent m-2" style={{ width: `${size}` }} onClick={() => { window.scroll(0, 0); }}>
                    <div className='responsive'>
                        <div className="card-body p-0">

                            <img src={`${IMAGE_URL + poster_path}`} alt={name} className="card-img-top rounded-4 responsive-img" style={{ height: '290px' }} />

                        </div>
                        <div className="card-footer p-1 mt-2 responsive-footer">
                            <div className="card-title">
                                <h3 className='h6 text-light fw-normal'>{title || name}</h3>
                            </div>
                            <div className="card-subtitle text-light fw-lighter">{release_date || first_air_date}
                            </div>
                        </div>
                    </div>
                </CardLink>
            }

            {
                (page('/searchResults')) &&

                <CardLink state={{ data: { ...data } }} to={`/${name ? 'tv' : 'movie'}/${name || title}`}className="card border-0 bg-transparent m-2" style={{ width: `${size}` }} onClick={() => { window.scroll(0, 0); }}>
                    <div className='responsive'>
                        <div className="card-body p-0">

                            <img src={`${IMAGE_URL + poster_path}`} alt={title || name} className="card-img-top rounded-4 responsive-img" style={{ height: '290px' }} />

                        </div>
                        <div className="card-footer p-1 mt-2 responsive-footer">
                            <div className="card-title">
                                <h3 className='h6 text-light fw-normal'>{title || name}</h3>
                            </div>
                            <div className="card-subtitle text-light fw-lighter">{release_date || first_air_date}
                            </div>
                        </div>
                    </div>
                </CardLink>
            }

            {((!carousel) && (!page('/tv') && !page('/movie') && !page('/searchResults'))) &&

                <CardLink state={{ data: { ...data } }} to={`${type}/${name || title}`} className="card border-0 bg-transparent m-2" style={{ width: `${size}` }} onClick={() => { window.scroll(0, 0); }}>

                    <div className='responsive'>
                        <div className="card-body p-0">

                            <img src={`${IMAGE_URL + poster_path}`} alt={title} className="card-img-top rounded-4 responsive-img" style={{ height: '290px' }} />

                        </div>
                        <div className="card-footer p-1 mt-2 responsive-footer">
                            <div className="card-title">
                                <h3 className='h6 text-light fw-normal'>{title || name}</h3>
                            </div>
                            <div className="card-subtitle text-light fw-lighter">{release_date || first_air_date}
                            </div>
                        </div>
                    </div>
                </CardLink>
            }

            {carousel === true &&

                <CardLink state={{ data: { ...data } }} to={`/movie/proximamente/${title}`} className="card border-0 bg-transparent m-2" style={{ width: `${size}` }} onClick={() => { window.scroll(0, 0); }}>

                    <div className="card-body p-0">

                        <img src={`${IMAGE_URL + poster_path}`} alt={title} className="card-img-top rounded-4" style={{ height: '290px' }} />

                    </div>
                    <div className="card-footer p-1 mt-2">
                        <div className="card-title">
                            <h3 className='h6 text-light fw-normal'>{title}</h3>
                        </div>
                        <div className="card-subtitle text-light fw-lighter">{release_date}</div>
                    </div>
                </CardLink>
            }


        </>



    )
}

export default MovieCard
