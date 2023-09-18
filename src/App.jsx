
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './layout/Main'
import Home from './pages/Home'
import Feature from './pages/Feature'
import Service from './pages/Service'
import Blog from './pages/Blog'
import Login from './pages/Login'
import Register from './pages/Register'
import Page from './pages/Page'
import Error from './pages/Error'
function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element: <Main/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/feature",
          element:<Feature/>
        },
        {
          path:"/service",
          element: <Service/>
        },
        {
          path:"/page",
          element:<Page/>
        },
        {
          path:"/blog",
          element: <Blog/>
        },
        {
          path:"/login",
          element: <Login/>
        },
        {
          path:"/register",
          element: <Register/>
        },

      ]
      
    },
    {
      path:"*",
      element:<Error/>,
    }
  ])

  return (
  <div>
   
   <RouterProvider router={router} />  
  
  </div>
  )
}

export default App
