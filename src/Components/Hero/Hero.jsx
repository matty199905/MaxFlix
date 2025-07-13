import React, { useEffect, useState } from 'react'
import { getVideos, getWatchProviders } from '../../Axios/apiData'
import Youtube from 'react-youtube'
import { Link, useLocation } from 'react-router-dom'
import Loader from '../UI/Loader/Loader'




const Hero = ({ img, imgDinamicPage, title, year, overview, id, home, type, ...randomMovie }) => {

    const location = useLocation();
    const cardData = location?.state?.data;

    const [videos, setVideos] = useState();
    const [showVideo, setShowVideo] = useState(false);
    const [providers, setProviders] = useState();
    const [loading, setLoading] = useState(true)




    const link = providers?.link;

useEffect(() => {
    setLoading(true);
    getVideos(id)
        .then((data) => setVideos(data))
        .finally(() => setLoading(false));
}, [id]);




   useEffect(() => {
    const findProvider = (data) => {
        if (data?.AR || data?.ES || data?.US) {
            return data?.AR || data?.ES || data?.US;
        } else {
            const array = data ? Object.entries(data).map(([key, value]) => value) : undefined;
            return data ? array[0] : undefined;
        }
    };
    setLoading(true);
    getWatchProviders(type, cardData?.id)
        .then((data) => setProviders(findProvider(data)))
        .finally(() => setLoading(false));
}, [location.pathname, type, cardData?.id]);





    const opts = {
        height: '380px',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },

    }


    const officialTrailer = videos?.find(trailer =>
        trailer?.name.includes('Official') || trailer?.name.includes('Trailer')
    ) || videos?.find(trailer =>
        !trailer?.name.includes('Trailer')
    )





    return (
        <>
            {home === true ?


                <div className="container-fluid d-flex d-flex-column justify-content-start align-items-start mb-5 p-5 rounded-bottom-4 z-0 position-relative"
                    style={{
                        height: '50vh',
                        width: '100vw',
                        marginTop: '-30px',
                        backgroundImage: img,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundAttachment: 'fixed'
                    }}>

                    <div className='container-fluid overlay z-1 p-5 position-absolute top-0 right-0 ' style={{
                        height: '50vh',
                        width: '100vw',
                        background: 'linear-gradient(to top, black, rgba(0,0,0,0), rgba(0,0,0,0))',
                        marginLeft: '-48px'
                    }}>

                        <div className="row">
                            <div className="col-12 ">

                                <div className="container ps-0 mb-4 mt-4">
                                    <div className="row">
                                        <div className="col">
                                            <h1>{title}</h1>
                                            <h2 className='h5'>{year}</h2>

                                            <Link state={{ ...randomMovie }} to={`/movie/${title}`} className='btn btn-md btn-primary ps-3 pe-3 mt-3'>
                                                VER MÁS
                                            </Link>





                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                :





                <div className="container-fluid d-flex d-flex-column justify-content-start align-items-start rounded-bottom-4 z-0 position-relative"
                    style={{
                        height: '100vh',
                        marginTop: `-10px`,
                        backgroundImage: imgDinamicPage,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundAttachment: 'fixed'
                    }}>

                    <div className='container-fluid overlay z-1 position-absolute top-0 left-0'
                        style={{
                            height: '100vh',
                            width: '100vw',
                            background: 'linear-gradient(to top, black, rgba(0,0,0,0), rgba(0,0,0,0))',
                            marginLeft: '-12px'
                        }}>

                        <div className="row">
                            <div className="col-12 ">






                                <div className="container">
                                    <div className="row ">
                                        <div className="col-5 d-flex flex-column gap-4"
                                            style={{ width: '100vw' }}>



                                            <h1 className='mt-5'>{title || cardData?.original_name}</h1>


                                            {

                                                showVideo === true ?

                                                    <Youtube opts={opts} videoId={officialTrailer?.key} /> :


                                                    <p className='overview fs-6 fw-light p-4 pt-3 rounded-4 mt-0 mb-0' style={{
                                                        backdropFilter: 'blur(5px)', background: '#3f3f3f3b',
                                                        maxHeight: '200px',
                                                        minWidth: '295px',
                                                        maxWidth: '500px',
                                                        overflowY: 'auto',
                                                        overflowX: 'hidden',
                                                        marginTop: '-40px',

                                                    }}>

                                                        <span className='h5' >Overview:
                                                        </span> {overview}</p>


                                            }







                                            <div className='d-flex gap-4' style={{ marginTop: '-30px' }}>



                                                {loading && !link ? (
                                                    <button className='btn btn-lg btn-primary ps-3 pe-3 mt-4 +' disabled>
                                                        <Loader />
                                                    </button>
                                                ) : !loading && link ? (
                                                    <a
                                                        href={link}
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                        className='btn btn-lg btn-primary ps-3 pe-3 mt-4 + text-light'
                                                    >
                                                        VER MÁS
                                                    </a>
                                                ) : (
                                                    <button className='btn btn-lg btn-danger ps-3 pe-3 mt-4 +' disabled>
                                                        NO DISPONIBLE
                                                    </button>
                                                )}



                                                {videos ? (
                                                    <button
                                                        onClick={() => setShowVideo(!showVideo)}
                                                        className='btn btn-lg btn-warning text-light btn-outline ps-3 pe-3 mt-4'
                                                    >
                                                        {showVideo ? 'CERRAR' : 'TRAILER'}
                                                    </button>
                                                ) : loading ? (
                                                    <button className='btn btn-lg btn-warning text-light btn-outline ps-3 pe-3 mt-4' disabled>
                                                        <Loader />
                                                    </button>
                                                ) : (
                                                    <button className='btn btn-lg btn-danger text-light btn-outline ps-3 pe-3 mt-4 ms-4' disabled>
                                                        TRAILER NO DISPONIBLE
                                                    </button>
                                                )}
                                            </div>





                                        </div>
                                    </div>
                                </div>







                            </div>
                        </div>
                    </div>
                </div>


            }
        </>

    )
}

export default Hero
