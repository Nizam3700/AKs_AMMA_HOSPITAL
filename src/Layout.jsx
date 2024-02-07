import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'
import ElfSightPlugin from './Plugin/ElfSightPlugin'
import Heade from './Header/Heade'

function Layout() {
  return (
    <>
    <Heade/>
    <Outlet/>
    <ElfSightPlugin/>
    <Footer/>
    </>
  )
}

export default Layout