import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Components/Home'
import GamePage from './Components/GamePage'
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom'
import './index.css'

const router = createBrowserRouter(
 createRoutesFromElements(
  <>
  <Route path="/" element={<Home/>}/>
  <Route path="game"  element={<GamePage/>}/>  
  </>  

 )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
