import React from 'react'
import { FaHamburger, FaPizzaSlice } from 'react-icons/fa'
import { GiChopsticks, GiNoodles } from 'react-icons/gi'
import '../index.css'
import { NavLink } from 'react-router-dom'



const Nav = () => {


  return (
    <>
 
    <nav className=' flex items-center justify-center mb-[20px]'>
    
      <div className=' flex items-center justify-between w-[30%] '>
      <NavLink to={'/Italian'}  className=''>
      <FaPizzaSlice className=''/>
      <p className='text-[8px] font-medium'><i>Italian</i></p>
      </NavLink>


    
      <NavLink to={'/american'} className=''>
      <FaHamburger  className=''/>
      <p className='text-[8px] font-medium '>American</p>
      </NavLink>



      <NavLink to={'/French'}  className=''>
      <GiNoodles className=''/>
      <p className='text-[8px] font-medium '>French</p>
      </NavLink>



      <NavLink to={'/Japanese'}  className=''>
      <GiChopsticks className=''/>
      <p className='text-[8px] font-medium '>Japanese</p>
      </NavLink>
      
      </div>
        
      </nav>
    </>
  )
}



export default Nav