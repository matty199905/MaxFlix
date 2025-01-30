import React from 'react'
import { LayoutWrapper } from './LayoutStyled'

const Layout = ({children}) => {
  return (
<LayoutWrapper>
  {children}
</LayoutWrapper>
  )
}

export default Layout
