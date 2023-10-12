import React from 'react'
import Crud from '../components/Crud'
import { useSelector } from 'react-redux'

const HomePage = () => {

  const { todos } = useSelector((store) => store.todo);


  return (
    <div className='p-7 grid grid-cols-4'>


      {todos.map((todo, i) => {
        return <div key={todo.id} className='shadow-2xl p-5 space-y-6'>
          <h1>{todo.username}</h1>
          <img src={todo.imageReview} alt="" />
          <div className='flex justify-end space-x-4'>
            <button><i className="fa-solid fa-pen-to-square fa-lg"></i></button>
            <button><i className="fa-solid fa-trash fa-lg"></i></button>
          </div>
        </div>
      })}

    </div>
  )
}

export default HomePage
