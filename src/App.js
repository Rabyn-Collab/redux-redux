import React from 'react'
import { Route, Routes } from 'react-router'
import RootLayOut from './components/RootLayOut'
import NotFound from './pages/NotFound'
import HomePage from './pages/HomePage'
import Crud from './components/Crud'


const App = () => {

  return (
    <Routes>
      <Route path='/' element={<RootLayOut />} >
        <Route index element={<HomePage />} />
        <Route path='add-some' element={<Crud />} />

        <Route path='*' element={<NotFound />} />

      </Route>

    </Routes>
  )
}

export default App
