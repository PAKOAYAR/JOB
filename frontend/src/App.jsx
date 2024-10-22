
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Jobs from './components/jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import Jobdescription from './components/Jobdescription'
import History from './components/History'


//import Navbar from './components/ui/shared/Navbar'
const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  
  {
    path:'/signup',
    element:<Signup/>
  },
  
  {
    path:'/jobs',
    element:<Jobs/>
  },
  {
    path:'/description/:id',
    element:<Jobdescription/>
  },

  {
    path:'/browse',
    element:<Browse/>
  },
  {
    path:'/profile',
    element:<Profile/>
  },
  {
    path:'/history',
    element:<History/>
  },
  
  
])
function App() {

  return (
      <>
   <RouterProvider router={appRouter}/>
      </>
  )
}

export default App
