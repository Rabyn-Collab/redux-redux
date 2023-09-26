import React from 'react'
import { mealData } from '../dummy/data_logic'
import { useNavigate } from 'react-router'


const HomePage = () => {

  const nav = useNavigate();



  return (
    <div>

      <div className='space-y-2'>


        {mealData.map((meal, i) => {
          return <div onClick={() => nav('/detail', { state: meal })} className='cursor-pointer' key={i}  >
            <img className='h-[200px]' src={meal.strMealThumb} alt="" />
          </div>
        })}

      </div>


      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, consectetur deserunt. Atque magnam porro nam soluta nihil voluptatum consequatur quod adipisci, facilis vel sint laborum velit blanditiis nulla voluptatibus cupiditate minus in suscipit dolorum alias eos veritatis numquam. Itaque dolorum nulla expedita magnam exercitationem recusandae odio neque similique atque tempore.</p>

    </div>
  )
}

export default HomePage
