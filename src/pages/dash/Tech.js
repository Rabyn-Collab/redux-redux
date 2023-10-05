import React from 'react'
import { DiAndroid, DiAtlassian, DiCss3, DiGithubFull, DiHtml5, DiJava, DiJavascript, DiPython, DiReact, DiSwift } from "react-icons/di";
const Tech = () => {
  return (
    <div>


      <h1 className='text-center text-3xl font-bold mb-10'>Technologies I Use</h1>
      <div className="re-icons grid grid-cols-4 place-items-center gap-7 ">
        <DiReact className='hover:scale-150 duration-75  ease-in-out' size={200} color='red' />
        <DiAndroid size={200} color='green' />
        <DiJava className='animate-bounce' size={200} color='purple' />
        <DiCss3 size={200} color='orange' />
        <DiSwift size={200} color='blue' />
        <DiPython size={200} color='brown' />
        <DiGithubFull size={200} color='black' />
        <DiAtlassian size={200} color='teal' />
      </div>
    </div>
  )
}

export default Tech
