import React from 'react'
import '../index.css'
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate} from 'react-router-dom';



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
            <div className='d flex w-[50%]  items-center py-[8px] px-[9px] space-x-3 rounded-[10px]'>
            <FaSearch className='text-white text-sm'/>
                <input type="text" name="search" id="search" value={search} onChange={(e)=> setSearch(e.target.value)}
                  className='border-none outline-none  text-white w-[100%] bg-transparent text-[13px]'
                  placeholder='search recipe..' 
                />
            
                
            </div>
        </form>
    </>
  )
}

export default Search