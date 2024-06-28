import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

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
      }catch(error){
        console.error(error)
      }
    }

    fetchRecipeDetails()
  
 }, [params]);
  return (
    <>

    </>
  )
}

export default Details