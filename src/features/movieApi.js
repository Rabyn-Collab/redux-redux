import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';





export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({


    movieByCategory: builder.query({
      query: (query) => ({
        url: `/movie/${query}`,
        params: {
          api_key: '92c1e33f015755d27a231793c44ecfed'
        }
      })
    }),




  })
});

export const { useMovieByCategoryQuery } = movieApi;