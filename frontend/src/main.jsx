import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Register from './view/Register/Register.jsx'
import Home from './view/Home/Home.jsx'
import Details from './view/details/Details.jsx'
import Projeto from './view/project/Projeto.jsx'
import Tarefa from './view/task/Tarefa.jsx'
import Login from './view/Login/Login.jsx'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  { path:'/', 
  element:<App/>,
    },
{ path:'/register', 
element:<Register/>,
},

{
  path:'home',
  element:<Home/>,
},

{
  path:'details/:id',
  element:<Details/>,
},

{
  path:'projeto',
  element:<Projeto/>,
},
{
  path:'tarefa',
  element:<Tarefa/>,
},
{
  path:'login',
  element:<Login/>,
},
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} ></RouterProvider>
</React.StrictMode>,
)
