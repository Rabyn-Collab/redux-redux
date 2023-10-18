import React from 'react'
import { useVideoByIdQuery } from '../../features/movieApi'
import ErrorPage from '../../components/ErrorPage';

const VideoCompo = ({ id }) => {

  const { isError, isLoading, data, error } = useVideoByIdQuery(id);
  if (isLoading) {
    return <h1>Loading......</h1>
  }

  if (isError) {
    return <ErrorPage error={error} />
  }

  return (
    <div>
      <iframe className="w-[50%] aspect-video" src={`https://www.youtube.com/embed/${data?.results[0]?.key}`} allowFullScreen></iframe>

    </div>
  )
}

export default VideoCompo
