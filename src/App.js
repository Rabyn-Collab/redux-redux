import React from 'react'
import { Route, Routes } from 'react-router'
import RootLayOut from './components/RootLayOut'
import NotFound from './pages/NotFound'
import HomePage from './pages/HomePage'
import * as Gi from './pages/smaple';

const App = () => {



  console.log(Gi.data);
  return (
    <Routes>
      <Route path='/' element={<RootLayOut />} >
        <Route index element={<HomePage />} />

        <Route path='*' element={<NotFound />} />

      </Route>

    </Routes>
  )
}

export default App
