import React from 'react'
import '../index.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import '../index.css'
 
const SearchPage = () => {
    const params = useParams()
    const [state, setstate] = useState([]);
    
  const apiKey =  import.meta.env.VITE_API_URL

  
  
  useEffect(() => {

    const getRecipe = async() =>{


        const response = await axios.get(`https://api.spoonacular.com/recipes/search`, {
          params: {
            query: params,
            number: 10, // Number of results to fetch (adjust as needed)
            apiKey: '621cc4ee01e34c76975ae0e57c95a0a5',
          },
        });
        console.log(response.data.results)
        setstate(response.data.results)
        
    }
    getRecipe()
    
    
    
    
  }, [params]);

  const trunc = (str) => {
        if (str.length > 30) {
            return str.slice(0, 15) + '...';
        } else {
            return str;
        }
    }
    
  return (
    <>
    <div className='flex flex-wrap'>
        {
            state.map((x)=> {
              return (
                <div className='relative w-[200px] h-[200px] rounded-md ' >
                    <img src={x.image} alt="" className='h-[100%] w-[100%] rounded-md object-cover'/>
                    
                    <p className='absolute z-10 arrange'>{trunc(x.title)}</p>
                    <div className='absolute  z-5 dark top-[0px] w-[100%] h-[100%] rounded-md'></div>
                </div>
            )
            
            })
        }
    </div>
       
    </>
  )
}

export default SearchPage