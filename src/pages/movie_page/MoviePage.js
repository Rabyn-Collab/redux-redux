import React from 'react'
import { useMovieByPageQuery } from '../../features/movieApi';
import CommonMovie from '../../components/CommonMovie';
import { useParams } from 'react-router';
const MoviePage = () => {

  const { category, page } = useParams();
  const { isLoading, isError, error, data } = useMovieByPageQuery({
    category,
    page
  });


  return (
    <>
      <CommonMovie isError={isError} isLoading={isLoading} category={category} error={error} data={data} />

    </>
  )
}

export default MoviePage
