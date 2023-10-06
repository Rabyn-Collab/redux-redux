import React from 'react'

const Info = () => {
  return (
    <div className='my-5'>
      <h1 className='text-center text-3xl font-bold mb-10'>Who am I</h1>

      <div className="content">
        <div className='h-[400px] w-[400px] bg-black rounded-full border-[7px] border-green-700 mx-auto shadow-lg flex justify-center items-center'>
          <div className='text-white'>
            <h1> Name : Some Person</h1>
            <p>Email: someperson@gmail.com</p>
            <p>Tel:  9777777</p>
            <p>Age:  90</p>
            <p> Experience:  python, java, dart</p>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Info
