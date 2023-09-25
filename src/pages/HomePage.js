import React from 'react'
import { mealData } from '../dummy/data_logic'
import Header from '../components/Header'

const HomePage = () => {
  return (
    <div>

      <div className='space-y-2'>


        {mealData.map((meal, i) => {
          return <div key={i}>
            <img className='h-[200px]' src={meal.strMealThumb} alt="" />
          </div>
        })}

      </div>

      <h1>This is a Home Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, consectetur deserunt. Atque magnam porro nam soluta nihil voluptatum consequatur quod adipisci, facilis vel sint laborum velit blanditiis nulla voluptatibus cupiditate minus in suscipit dolorum alias eos veritatis numquam. Itaque dolorum nulla expedita magnam exercitationem recusandae odio neque similique atque tempore.</p>

    </div>
  )
}

export default HomePage
