import React from 'react'

import { Route, Routes } from 'react-router'
import RootLayOut from './components/RootLayOut'
import About from './pages/About'
import NotFound from './pages/NotFound'
import HomePage from './pages/HomePage'
import Detail from './pages/Detail'
import DetailById from './pages/DetailById'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<RootLayOut />} >
        <Route index element={<HomePage />} />
        <Route path='about' element={<About />} />
        <Route path='detail' element={<Detail />} />
        <Route path='detail/:id' element={<DetailById />} />
        <Route path='*' element={<NotFound />} />

      </Route>

    </Routes>
  )
}

export default App
