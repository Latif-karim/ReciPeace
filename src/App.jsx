import { useState, useEffect } from 'react'

import './index.css'
import Nav from './components/Nav'
import Pages from './Pages/Pages'
import Search from './components/Search'
import Logo from './components/Logo'



function App() {
  
 
  return (
    <>
    <div className=' px-[150px]  py-[50px] h-screen overflow-auto'>
    <Logo />
    <Search />
    <Nav />
    <Pages />

    </div>
      
    </>
  )
}

export default App
