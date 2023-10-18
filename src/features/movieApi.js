import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiKey, baseUrl } from './constant';





export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({


    movieByCategory: builder.query({
      query: (query) => ({
        url: `/movie/${query}`,
        params: {
          api_key: apiKey
        }
      })
    }),

    getMovieDetail: builder.query({
      query: (query) => ({
        url: `/movie/${query}`,
        params: {
          api_key: apiKey
        }
      })
    }),

    videoById: builder.query({
      query: (query) => ({
        url: `/movie/${query}/videos`,
        params: {
          api_key: apiKey
        }
      })
    }),



  })
});

export const { useMovieByCategoryQuery, useVideoByIdQuery, useGetMovieDetailQuery } = movieApi;