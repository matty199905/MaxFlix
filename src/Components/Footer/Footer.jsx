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

          </div>
        </div>
      </div> 
    </FooterContainer>
  )
}

export default Footer
