import React from 'react'
import '../index.css'
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate, useParams,  } from 'react-router-dom';



const Search = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate()
    
    
    const handleSubmit = (e) => {
      e.preventDefault()
      navigate('search/'+ search)
      
    }

  
  return (
    <>
        <form className='flex items-center justify-center mb-[20px]' onSubmit={handleSubmit}>
            <div className='d flex w-[50%]  items-center p-[5px] space-x-3 rounded-[10px]'>
            <FaSearch className='text-white'/>
                <input type="text" name="search" id="search" value={search} onChange={(e)=> setSearch(e.target.value)}
                  className='border-none outline-none  text-white w-[100%] bg-transparent'
                  placeholder='search recipe..'
                />
            
                
            </div>
        </form>
    </>
  )
}

export default Search