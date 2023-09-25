import React from 'react'
import { useNavigate } from 'react-router'

const NotFound = () => {

  const nav = useNavigate();
  return (
    <div className='h-[400px]'>


      <dotlottie-player src="https://lottie.host/8f9f8f28-1109-4205-a467-da967e632fed/6htL9zZNIj.json" background="transparent" speed="1" loop autoplay></dotlottie-player>


      <div className='flex flex-col  justify-center mt-10 gap-2'>
        <h1 className='text-center'>Page Not Found</h1>
        <button onClick={() => nav(-1)} className='bg-pink-400 max-w-xl px-5 py-1 hover:bg-pink-700 mx-auto'>Go Back To Home</button>
      </div>


    </div>
  )
}

export default NotFound
