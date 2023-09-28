import React, { useState } from 'react'
import { mealData } from '../dummy/data_logic'
import { useNavigate } from 'react-router'


const HomePage = () => {

  const nav = useNavigate();


  return (
    <div className='p-5'>



      <div className='space-y-2'>


        {mealData.map((meal, i) => {
          return <div className='cursor-pointer' key={i} >

            <button onClick={() => nav(`/detail/${meal.idMeal}`)} className='bg-purple-700 text-white my-4 px-2 py-1 rounded-sm hover:bg-pink-600'>Click To Pass ID</button>

            <img onClick={() => nav('/detail', { state: meal })} className='h-[200px]' src={meal.strMealThumb} alt="" />
          </div>
        })}

      </div>



    </div>
  )
}

export default HomePage
