import React, { useEffect, useRef, useState } from 'react'
import { NavLinkStyled } from './NavbarStyled';
import { useDispatch } from 'react-redux'
import { selectedFilter } from '../../Redux/Generos/generosSlice';
import { getMoviesGenres, getSeriesGenres } from '../../Axios/apiData'
import { useLocation, useNavigate } from 'react-router-dom';
import { setValue } from '../../Redux/SearchValue/SearchValueSlice';
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min";





const Navbar = () => {

  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()

  const [moviesGenres, setMoviesGenres] = useState()
  const [seriesGenres, setSeriesGenres] = useState()
  const [searchValue, setSearchValue] = useState('')


  useEffect(() => { getMoviesGenres().then((data) => setMoviesGenres(data.genres.map((item) => item))) }, [])
  useEffect(() => { getSeriesGenres().then((data) => setSeriesGenres(data.genres.map((item) => item))) }, [])



  const page = (pathname) => { return location.pathname === pathname }



  const navbarRef = useRef(null);

  const closeNavbar = () => {
    if (navbarRef.current) {
      const bsCollapse = new bootstrap.Collapse(navbarRef.current, {
        toggle: false,
      });
      bsCollapse.hide();
    }
  };


  return (

    <nav className="navbar navbar-expand-md bg-primary fixed-top navbar-light ps-2 rounded-bottom-2 "
      style={{
        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.25), rgba(0,0,0, 0.1), rgba(0,0,0,0), rgba(0,0,0,0), rgba(0,0,0,0),rgba(0,0,0,0),rgba(0,0,0,0),rgba(0,0,0,0))',
        minHeight: '80px',
        width: '100vw',
      }}>

      <div className="container-fluid d-flex align-items-center justify-content-between">

        <div className='d-flex'>
          <NavLinkStyled to='/' className='navbar-brand fw-bolder text-warning fs-2 mt-3'>
            MAXFLIX
          </NavLinkStyled>


          {

            page('/movie') &&


            <li className='nav-item dropdown'>

              <span className='nav-link dropdown-toggle text-light fw-medium ms-3 mt-4 pt-2'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
                id='dropdown-menu'
              >GÉNEROS</span>

              <ul className="dropdown-menu p-2 bg-dark" aria-labelledby='dropdown-menu'>
                <li><NavLinkStyled className="dropdown-item mb-2 bg-secondary rounded" onClick={() => dispatch(selectedFilter(moviesGenres[0]))}>Acción</NavLinkStyled></li>
                <li><NavLinkStyled className="dropdown-item mb-2 bg-secondary rounded" onClick={() => dispatch(selectedFilter(moviesGenres[1]))}>Aventura</NavLinkStyled></li>
                <li><NavLinkStyled className="dropdown-item mb-2 bg-secondary rounded" onClick={() => dispatch(selectedFilter(moviesGenres[4]))}>Crimen</NavLinkStyled></li>
                <li><NavLinkStyled className="dropdown-item mb-2 bg-secondary rounded" onClick={() => dispatch(selectedFilter(moviesGenres[6]))}>Drama</NavLinkStyled></li>
                <li><NavLinkStyled className="dropdown-item mb-2 bg-secondary rounded" onClick={() => dispatch(selectedFilter(moviesGenres[10]))}>Terror</NavLinkStyled></li>
                <li><NavLinkStyled className="dropdown-item mb-2 bg-secondary rounded" onClick={() => dispatch(selectedFilter(moviesGenres[13]))}>Romance</NavLinkStyled></li>
                <li><NavLinkStyled className="dropdown-item mb-2 bg-secondary rounded" onClick={() => dispatch(selectedFilter(moviesGenres[14]))}>Sci-Fi</NavLinkStyled></li>
                <li><NavLinkStyled className="dropdown-item mb-2 bg-secondary rounded" onClick={() => dispatch(selectedFilter(moviesGenres[16]))}>Suspenso</NavLinkStyled></li>
              </ul>
            </li>




          }

          {

            page('/tv') &&


            <li className='nav-item dropdown'>

              <span className='nav-link dropdown-toggle text-light fw-medium ms-3 mt-4 pt-2'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
                id='dropdown-menu'
              >GÉNEROS</span>

              <ul className="dropdown-menu p-2 bg-dark" aria-labelledby='dropdown-menu'>
                <li><NavLinkStyled className="dropdown-item mb-2 bg-secondary rounded" onClick={() => dispatch(selectedFilter(seriesGenres[0]))}>Accion & Aventura</NavLinkStyled></li>
                <li><NavLinkStyled className="dropdown-item mb-2 bg-secondary rounded" onClick={() => dispatch(selectedFilter(seriesGenres[2]))}>Comedia</NavLinkStyled></li>
                <li><NavLinkStyled className="dropdown-item mb-2 bg-secondary rounded" onClick={() => dispatch(selectedFilter(seriesGenres[3]))}>Crimen</NavLinkStyled></li>
                <li><NavLinkStyled className="dropdown-item mb-2 bg-secondary rounded" onClick={() => dispatch(selectedFilter(seriesGenres[5]))}>Drama</NavLinkStyled></li>
                <li><NavLinkStyled className="dropdown-item mb-2 bg-secondary rounded" onClick={() => dispatch(selectedFilter(seriesGenres[10]))}>Reality</NavLinkStyled></li>
                <li><NavLinkStyled className="dropdown-item mb-2 bg-secondary rounded" onClick={() => dispatch(selectedFilter(seriesGenres[11]))}>Sci-Fi & Fantasy</NavLinkStyled></li>
              </ul>
            </li>


          }
        </div>


        <button className='navbar-toggler border-0 mt-3' type='button' data-bs-toggle='collapse'
          data-bs-target='#menu'
          aria-controls='menu'
          aria-expanded="false"
          aria-label='Mostrar / Ocultar Menú'>
          <span className='navbar-toggler-icon '></span>
        </button>



        <div className="collapse navbar-collapse" id='menu' ref={navbarRef}>


          <ul className='navbar-nav d-flex align-items-start justify-content-start gap-4 mt-3 ms-4 w-100'>

            <li className='nav-item'>
              <NavLinkStyled to='/' className='nav-link text-light fw-medium' onClick={closeNavbar}>
                INICIO
              </NavLinkStyled>
            </li>

            <li className='nav-item'>
              <NavLinkStyled to='tv' className='nav-link text-light fw-medium' onClick={closeNavbar}>
                SERIES
              </NavLinkStyled>
            </li>

            <li className='nav-item'>
              <NavLinkStyled to='movie' className='nav-link text-light fw-medium' onClick={closeNavbar}>
                PELICULAS
              </NavLinkStyled>
            </li>



          </ul>

          <form className="d-flex gap-2 w-50 m-3 ms-3" role="search">
            <input
              className="form-control me-2 border-1 border-dark"
              style={{ minWidth: '160px' }}
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  dispatch(setValue(searchValue));
                  navigate('/searchResults');
                  window.scrollTo(0, 0);
                  closeNavbar();
                }
              }}
            />

            <button
              className="btn btn-outline-warning fw-bolder border-2 text-light"
              type="button"
              onClick={() => {
                dispatch(setValue(searchValue));
                navigate('/searchResults');
                window.scrollTo(0, 0);
                closeNavbar();
              }}>
              Buscar
            </button>
          </form>

        </div>





      </div>


    </nav>


  )
}

export default Navbar





