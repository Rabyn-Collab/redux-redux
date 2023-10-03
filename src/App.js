import React from 'react'
import { Route, Routes } from 'react-router'
import RootLayOut from './components/RootLayOut'
import About from './pages/About'
import NotFound from './pages/NotFound'
import HomePage from './pages/HomePage'
import Ramdom from './pages/Ramdom'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<RootLayOut />} >
        <Route index element={<HomePage />} />
        <Route path='about' element={<About />} />
        <Route path='random' element={<Ramdom />} />
        <Route path='*' element={<NotFound />} />

      </Route>

    </Routes>
  )
}

export default App
