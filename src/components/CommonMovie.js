import React from 'react'
import Loading from './Loading'
import ErrorPage from './ErrorPage'
import { Image, Shimmer } from 'react-shimmer'
import { useNavigate } from 'react-router'

const CommonMovie = ({ isLoading, isError, error, data, category }) => {
  const nav = useNavigate();
  if (isLoading) {
    return <Loading />
  }

  if (isError) {
    return <ErrorPage error={error} />
  }


  return (
    <div>
      <div className='grid grid-cols-3 p-5 gap-5'>
        {data && data.results.map((movie) => {
          return <div key={movie.id} className='cursor-pointer hover:scale-105 duration-75 ease-in' onClick={() => nav(`/movie/detail/${movie.id}`)}>
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              fallback={<Shimmer width={300} height={350} />}
            />

            <h1>{movie.overview.substring(0, 100) + '....'}</h1>
          </div>
        })}

      </div>
      {category && <div className='flex justify-center space-x-4 mb-3'>
        <button onClick={() => nav(-1)} disabled={data?.page === 1 ? true : false}>Prev</button>
        <h1>{data?.page}</h1>
        <button onClick={() => nav(`/movie/page/${category}/${data?.page + 1}`)}>Next</button>
      </div>}
    </div>
  )
}

export default CommonMovie
