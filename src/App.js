import React from 'react'
import Layout from './Components/Layout/Layout'
import * as bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
   <Layout>
<Navbar/>
<Footer/>
   </Layout>
  )
}

export default App
