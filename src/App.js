import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Layout from './Components/Layout/Layout'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import RoutesApp from './Router/Routes';


const App = () => {
  return (
   <Layout>
<Navbar/>
<RoutesApp/>
<Footer/>
   </Layout>
  )
}

export default App
