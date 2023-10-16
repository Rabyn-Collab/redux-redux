import React from 'react'
import { useMovieByCategoryQuery } from '../features/movieApi'

const HomePage = () => {

  const data = useMovieByCategoryQuery('popular');
  console.log(data);
  return (
    <div>

    </div>
  )
}

export default HomePage
