import React from 'react'
import { FooterContainer } from './FooterStyled'



const Footer = () => {
  return (
    <FooterContainer className="container-fluid fixed-bottom pt-4">

      <div className="container">
        <div className="row">
          <div className="col
          justify-content-start align-items-baseline ">

          <span class="navbar-brand fw-bolder text-warning fs-1">
          MAXFLIX
        </span>

        <p className=' h6 '>Todas tus películas en un solo lugar.</p>

          </div>
        </div>
      </div>
    </FooterContainer>
  )
}

export default Footer
