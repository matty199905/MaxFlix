import React, { useEffect, useState } from 'react'
import { getVideos, getWatchProviders } from '../../Axios/apiData'
import Youtube from 'react-youtube'
import { Link, useLocation } from 'react-router-dom'




const Hero = ({ img, title, year, overview, id, home, type, ...randomMovie }) => {

    const location = useLocation()
    const cardData = location?.state?.data

    const [videos, setVideos] = useState()
    const [showVideo, setShowVideo] = useState(null)
    const [nextSoon, setNextSoon] = useState()
    const [providers, setProviders] = useState()


    const link = providers?.link

console.log(location);



    useEffect(() => { getVideos(id).then((data) => setVideos(data)) }, [])

    useEffect(() => {
        const nextSoonCheck = location.pathname.includes('proximamente') ? true : false;
        setNextSoon(nextSoonCheck)
    }, [location.pathname])

    useEffect(() => {
        getWatchProviders(cardData?.id).then((data) => setProviders(data?.ES || data?.US || data?.AR))
        
    }, [location])





    const opts = {
        height: '350px',
        width: '600px',
        playerVars: {
            autoplay: 1,
        },

    }



    const officialTrailer = videos?.find((trailer) => { if (trailer?.name.includes('Official') || trailer?.name.includes('Trailer')) { return trailer } }) || videos?.find((trailer) => { if (!trailer?.name.includes('Trailer')) { return videos[0] } })

console.log(cardData);




    return (
        <>
            {home === true ?


                <div className="container-fluid d-flex d-flex-column justify-content-start align-items-start p-5 mb-5 rounded-bottom-4 z-0 position-relative"
                    style={{
                        height: '46vh',
                        marginTop: '-10px',
                        backgroundImage: img,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundAttachment: 'fixed'
                    }}>

                    <div className='container-fluid overlay z-1 p-5 position-absolute top-0 left-0 ' style={{
                        height: '46vh',
                        width: '100vw',
                        background: 'linear-gradient(to top, black, rgba(0,0,0,0), rgba(0,0,0,0))',
                        marginLeft: '-60px'
                    }}>

                        <div className="row">
                            <div className="col-12 ">

                                <div className="container ps-0 mb-4 mt-4">
                                    <div className="row">
                                        <div className="col">
                                            <h1>{title}</h1>
                                            <h2 className='h4'>{year}</h2>

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





                <div className="container-fluid d-flex d-flex-column justify-content-start align-items-start p-5 rounded-bottom-4 z-0 position-relative"
                    style={{
                        height: '100vh',
                        marginTop: '-10px',
                        backgroundImage: img,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundAttachment: 'fixed'
                    }}>
                    {showVideo === true ?

                        <Youtube className='position-absolute bottom-0 end-0 me-4 mb-5 mt-n3 z-2' opts={opts} videoId={officialTrailer?.key} /> : null

                    }
                    <div className='container-fluid overlay z-1 p-5 position-absolute top-0 left-0 ' style={{
                        height: '100vh',
                        width: '100vw',
                        background: 'linear-gradient(to top, black, rgba(0,0,0,0), rgba(0,0,0,0))',
                        marginLeft: '-60px'
                    }}>

                        <div className="row">
                            <div className="col-12 ">

                                <div className="container ps-0 mb-4 mt-4">
                                    <div className="row">
                                        <div className="col">
                                            <h1>{title || cardData?.original_name}</h1>
                                            <h2 className='h4'>{year}</h2>
                                        </div>
                                    </div>
                                </div>

                                <div className="container ps-0 mb-4">
                                    <div className="row">
                                        <div className="col-5 ">
                                            <p className='fs-5 fw-light p-4 rounded-4' style={{ backdropFilter: 'blur(5px)', background: '#3f3f3f3b' }}><span className='h5'>Overview:</span> {overview}</p>
                                           

                                                    <button className='btn btn-lg btn-primary ps-3 pe-3 mt-4'>
                                                       <a href={link} target='_blank' rel='noopener noreferrer' className='text-light'>
                                                     VER MÁS
                                                        </a> 
                                                    </button>

                                            
                                            
                                            {
                                                videos ? <button onClick={() => { setShowVideo(true) }} className='btn btn-lg btn-warning text-light btn-outline ps-3 pe-3 mt-4 ms-4'>
                                                    TRAILER
                                                </button> :

                                                    <button className='btn btn-lg btn-danger text-light btn-outline ps-3 pe-3 mt-4 ms-4 disabled'>
                                                        TRAILER NO DISPONIBLE
                                                    </button>

                                            }



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
