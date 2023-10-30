import React from 'react'
import { Route, Routes } from 'react-router'
import RootLayOut from './components/RootLayOut'
import NotFound from './pages/NotFound'
import HomePage from './pages/HomePage'
import CategoryMovie from './pages/CategoryMovie'
import MovieDetail from './pages/detail/MovieDetail'
import SearchPage from './pages/search/SearchPage'
import MoviePage from './pages/movie_page/MoviePage'
import SampleHome from './pages/sample/SampleHome'
import PageRoute from './pages/sample/PageRoute'

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<RootLayOut />} >
        {/* <Route index element={<SampleHome />} />
        <Route path='/page/:cata/:pages' element={<PageRoute />} /> */}

        <Route index element={<HomePage />} />
        <Route path='movie/:category' element={<CategoryMovie />} />
        <Route path='movie/detail/:id' element={<MovieDetail />} />
        <Route path='movie/search/:query' element={<SearchPage />} />
        <Route path='movie/page/:category/:page' element={<MoviePage />} />
        <Route path='*' element={<NotFound />} />

      </Route>

    </Routes>
  )
}

export default App
