import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { useMovieByCategoryQuery } from '../features/movieApi';
import Loading from '../components/Loading';
import { Image, Shimmer } from 'react-shimmer'
import ErrorPage from '../components/ErrorPage';
import CommonMovie from '../components/CommonMovie';

const CategoryMovie = () => {
  const { category } = useParams();
  const nav = useNavigate();

  const { isLoading, isError, error, data } = useMovieByCategoryQuery(category ?? 'now_playing');
  console.log(data);
  return (
    <div>
      <CommonMovie isError={isError} isLoading={isLoading} category={category} error={error} data={data} />
    </div>
  )
}

export default CategoryMovie
