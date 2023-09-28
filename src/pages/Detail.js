import React from 'react'
import { useLocation } from 'react-router'

const Detail = () => {


  const { state } = useLocation();


  return (
    <div className='p-4 space-y-4'>

      <h1 className='text-2xl font-bold '>{state?.strMeal}</h1>

      <img className='rounded-xl h-[400px]' src={state?.strMealThumb} alt="" />



    </div>
  )
}

export default Detail
