import React from 'react'
import Navbar from '../../components/Navbar/navbar'
import Footer from '../../components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function HomeLayout() {
  return (
    <> 
    <Navbar />
    <Outlet  />
    <Footer/>
    </>
  )
}

export default HomeLayout