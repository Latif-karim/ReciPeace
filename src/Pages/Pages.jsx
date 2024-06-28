import React from 'react'
import Home from './Home'
import { Routes, Route } from 'react-router-dom'
import Search from '../components/Search'
import SearchPage from './SearchPage'
import Japanese from './Japanese'
import Italian from './Italian'
import American from './American'
import French from './French'
import Details from './Details'

const Pages = () => {
  return (
    <div className=''>
    <Routes >
      <Route path='/' element={<Home />}/>
      <Route path='/Italian' exact element={<Italian/>}/>
      <Route path='/Japanese' exact  element={<Japanese/>}/>
      <Route path='/American' exact element={<American />}/>
      <Route path='/French' exact element={<French/>}/>
      <Route path='/search/:searched' element={<SearchPage />}/>
      <Route path='/detail/:id' element={<Details />}/>
    </Routes>
      
    </div>
  )
}

export default Pages