import React from 'react'


const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg fixed-top  bg-primary navbar-light ps-2 pe-2'>

      <div className='container-fluid d-flex align-items-end'>

        <a class="navbar-brand fw-bolder text-warning fs-2" href="#">
          MAXFLIX
        </a>
        
        <button className='navbar-toggler border-0 '
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#menu'
          aria-controls='menu'
          aria-expanded="false"
          aria-label='Mostrar / Ocultar Menú'>
          <span className='navbar-toggler-icon '></span>
        </button>


        <div className="collapse navbar-collapse d-flex justify-content-lg-start" id='menu'>


          <ul className='navbar-nav d-flex gap-4 ms-5 mt-sm-3'>
            <li className='nav-item'><a className='nav-link       text-light fw-medium' href="">INICIO</a></li>

            <li className='nav-item'><a className='nav-link       text-light fw-medium' href="">PELÍCULAS</a></li>

            <li className='nav-item'><a className='nav-link       text-light fw-medium' href="">SERIES</a></li>


            <li className='nav-item dropdown'>

              <a className='nav-link dropdown-toggle       text-light fw-medium'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
                id='dropdown-menu'
              >GÉNEROS</a>

              <ul className="dropdown-menu bg-dark" aria-labelledby='dropdown-menu'>
                <li><a href="" className="dropdown-item">Estrenos</a></li>
                <li><a href="" className="dropdown-item">Aventura</a></li>
                <li><a href="" className="dropdown-item">Acción</a></li>
                <li><a href="" className="dropdown-item">Ciencia Ficción</a></li>
                <li><a href="" className="dropdown-item">Comedia</a></li>
                <li><a href="" className="dropdown-item">Crimen</a></li>
                <li><a href="" className="dropdown-item">Drama</a></li>
                <li><a href="" className="dropdown-item">Romance</a></li>
                <li><a href="" className="dropdown-item">Terror</a></li>
              </ul>
            </li>
  

          </ul>

        </div>

        <form class="d-flex gap-2  mt-sm-4" role="search">
          <input class="form-control me-2 border-1 border-dark" type="search" placeholder="Search" aria-label="Search"></input>
          <button class="btn btn-outline-warning fw-bolder border-2 text-light" type="submit">Buscar</button>
        </form>


      </div>

  

    </nav>


  )
}

export default Navbar
