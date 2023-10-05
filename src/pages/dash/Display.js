import React from 'react'

const Display = () => {
  return (
    <div className='grid grid-cols-2 items-center'>

      <div className="dis-img">
        <dotlottie-player src="https://lottie.host/fdcd7df3-0c72-43f0-8346-12bebd56c714/JwyRbDNvNA.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
      </div>

      <div className="dis-info space-y-3">
        <h1 className='text-xl'>Hi I'm John</h1>
        <div>
          <em className='text-pink-600'>Some Dev, Freelancer, Rounder</em>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quos optio incidunt. Ab sapiente dolorem nam aut a deleniti quas magnam! Doloribus debitis modi quod fuga dicta reprehenderit, cum laborum dolor sapiente sed delectus aspernatur eius sint itaque rerum aut perspiciatis rem quisquam, voluptatibus labore mollitia sit. Eaque, explicabo quam!</p>

      </div>

    </div>
  )
}

export default Display
