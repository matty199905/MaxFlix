import React from 'react'
import { FooterContainer } from './FooterStyled'



const Footer = () => {
  return (
    <FooterContainer>

      <div className="container">
        <div className="row">
          <div className="col
          justify-content-start align-items-baseline mt-3 d-flex flex-column gap-2" >

            <span className="navbar-brand fw-bolder text-warning fs-1">
              MAXFLIX
            </span>

            <p className=' h6 '>Todas tus películas en un solo lugar.</p>
            <p style={{ fontSize: '10px', color: 'gray' }}>
              Datos de disponibilidad en plataformas de streaming proporcionados por <a href="https://www.justwatch.com" target="_blank" rel="noreferrer">JustWatch</a> a través de TMDb.
            </p>

          </div>

        </div>
      </div>
    </FooterContainer>
  )
}

export default Footer
