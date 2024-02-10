import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'
import ElfSightPlugin from './Plugin/ElfSightPlugin'
import Foot from './Footer/Foot'
import Head from './Header/Head'
import Chat from './Header/Chat'


function Layout() {
  return (
    <>
    <Chat/>
    <Outlet/>
    <ElfSightPlugin/>
    <Foot/>
    </>
  )
}

export default Layout