import React, { useState } from 'react'
import { mealData } from '../dummy/data_logic'
import { useNavigate } from 'react-router'


const HomePage = () => {

  const nav = useNavigate();
  const [todo, setTodo] = useState('');



  return (
    <div className='p-5'>

      <form onSubmit={handleSubmit} className='space-y-3'>
        <input onChange={(e) => setTodo(e.target.value)} type="text" className='border-2 border-black' />
        <br />

        <button className='bg-black text-white px-2 py-1' type='submit'>Submit</button>

      </form>




      {/* <div className='space-y-2'>


        {mealData.map((meal, i) => {
          return <div className='cursor-pointer' key={i} >

            <button onClick={() => nav(`/detail/${meal.idMeal}`)} className='bg-purple-700 text-white my-4 px-2 py-1 rounded-sm hover:bg-pink-600'>Click To Pass ID</button>

            <img onClick={() => nav('/detail', { state: meal })} className='h-[200px]' src={meal.strMealThumb} alt="" />
          </div>
        })}

      </div>
 */}


    </div>
  )
}

export default HomePage
