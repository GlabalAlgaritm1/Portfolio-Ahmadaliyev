import React from 'react'
import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from 'react-router'
import Layout from './Layout/Layout'
import Home from './Pages/Home'
import PNF from './Pages/PNF'
import Projects from './Pages/Projects'
import Boglanish from './Pages/Boglanish'
import Usetitle from './Components/Usetitle'

const App = () => {
  Usetitle('Asosiy')
  const routes = createBrowserRouter(
    createRoutesFromChildren(
      <>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='Projects' element={<Projects />} />
          <Route path='Boglanish' element={<Boglanish />} />
        </Route>
        <Route path='*' element={<PNF/>} />
      </>
    ))
  return (
    <RouterProvider router={routes}/>
  )
}

export default App