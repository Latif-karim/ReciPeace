import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import '../index.css'

const Details = () => {
  const [detail, setDetail] = useState([])
  const params = useParams()
 useEffect(() => {
  const fetchRecipeDetails = async () => {
   
    try {
      const response = await axios.get(`https://api.spoonacular.com/recipes/${params.id}/information`, {
        params: {
          apiKey: '621cc4ee01e34c76975ae0e57c95a0a5',
        },

      });
      console.log(response.data)
      setDetail(response.data)
      }catch(error){
        console.error(error)
      }
      
    }

    fetchRecipeDetails()
  
 }, [params]);
  return (
    <>
      <div className='grid grid-cols-5 gap-[50px] py-6'>
        <div className='col-span-2'>
          <p className='mb-[7px]'>{detail.title}</p>
          <div className='relative'>
          <img src={detail.image} alt="" className='rounded-sm'/>
          <div className='absolute top-[0px] dark left-0 z-20'></div>
          </div>
          
        </div>
        <div className='col-span-3'>
          <div className='flex items-center justify-evenly w-[80%] mb-2'>
            <button className='p-[8px] text-white d text-[12px] rounded-sm'>Instructions</button>
            <button className='p-[8px] text-black text-[12px] border-black border-[1px] rounded-sm'>Ingredients</button>

          </div>
          <div dangerouslySetInnerHTML={{ __html: detail.summary }} className='mb-[40px]'/>
          <div dangerouslySetInnerHTML={{ __html: detail.instructions }}/>
        </div>
      </div>
      
    </>
  )
}

export default Details