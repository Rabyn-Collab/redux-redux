import React from 'react'
import { Route, Routes } from 'react-router'
import RootLayOut from './components/RootLayOut'
import NotFound from './pages/NotFound'
import HomePage from './pages/HomePage'
import CategoryMovie from './pages/CategoryMovie'
import MovieDetail from './pages/detail/MovieDetail'

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<RootLayOut />} >
        <Route index element={<HomePage />} />
        <Route path='movie/:category' element={<CategoryMovie />} />
        <Route path='movie/detail/:id' element={<MovieDetail />} />
        <Route path='*' element={<NotFound />} />

      </Route>

    </Routes>
  )
}

export default App
