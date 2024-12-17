import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='container d-flex d-flex-column justify-content-start align-items-center'>
      {children}
    </div>
  )
}

export default Layout
