import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../index.css'

const Italian = () => {

    const [recipe, setRecipe] = useState([]);
    const apiKey =  import.meta.env.VITE_API_URL

    const getRecipe = async() =>{
    

    const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch?number=30', {
        params: {
            cuisine: 'Italian',
            apiKey: '621cc4ee01e34c76975ae0e57c95a0a5'
        }
    });

    console.log(response.data.results)
    setRecipe(response.data.results)
}
    const trunc = (str) => {
        if (str.length > 15) {
            return str.slice(0, 15) + '...';
        } else {
            return str;
        }
    }
    
    useEffect(() => {
  
      
      getRecipe()
      
      
      
    }, []);
  return (
    <div className='grid-container'>{
        recipe.map((e) => {
            return (
                <div className='relative w-[200px] h-[200px] rounded-md cursor-pointer ' >
                    <img src={e.image} alt="" className='h-[100%] w-[100%] rounded-md object-cover'/>
                    
                    <p className='absolute z-10 arrange'>{trunc(e.title)}</p>
                    <div className='absolute  z-5 dark top-[0px] w-[100%] h-[100%] rounded-md'></div>
                </div>
            )
        })
    }</div>
  )
}

export default Italian