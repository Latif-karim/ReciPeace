import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';
import '../index.css'
import { useDetailContext } from './DetailContext';







const Veggie = () => {
  const [recipe, setRecipe] = useState([]);
  const apiKey =  import.meta.env.VITE_API_URL
  const { handleDetail } = useDetailContext()

  
  
  useEffect(() => {

    const getRecipe = async() =>{
      const random = localStorage.getItem("veggie")
      if(random){
        setRecipe(JSON.parse(random));
        console.log(recipe)
        
      }else{
        
       
        const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=621cc4ee01e34c76975ae0e57c95a0a5&number=30&tags=vegetarian`) 
        const data = await response.json()
        localStorage.setItem("veggie", JSON.stringify(data.recipes))

        setRecipe(data.recipes)
        console.log(data.recipes)
      }
     
      
      
    }
    getRecipe()
    
    
    
  }, []);
  const trunc = (str) => {
    if (str.length > 15) {
        return str.slice(0, 15) + '...';
    } else {
        return str;
    }
}

  
  return (


    <>
      <div className='mb-[20px] '>
      <h1 className='mb-[6px]'>Our Vegetarian picks</h1>
      <Splide options={{
        perPage:3,
        arrows: false,
        pagination: false, 
        drag: "free",
        gap: "2rem",
      }}>
      {recipe.map((x) => {
    
      return (
        <SplideSlide key={x.id} >
      <div className='min-h-[14rem] rounded-[15px] overflow-hidden relative cursor-pointer' onClick={()=> handleDetail(x.id)}>
        <p className='absolute z-10 arrange'>{trunc(x.title)}</p>
        <img src={x.image} alt="" className='rounded-[15px] absolute top-[0px] w-[100%] h-[100%] object-cover'/>
        <div className='absolute z-5 dark top-[0px] w-[100%] h-[100%]'></div>
      </div>
      </SplideSlide>
     
    )
    
  })}
  </Splide>
      </div>
    </>
  )
}

export default Veggie