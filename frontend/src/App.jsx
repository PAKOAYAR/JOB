
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Jobs from './components/jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import Resetpass from './components/auth/Resetpass'
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
    path:'/resetpass',
    element:<Resetpass/>
  },
  {
    path:'/jobs',
    element:<Jobs/>
  },
  {
    path:'/browse',
    element:<Browse/>
  },
  {
    path:'/profile',
    element:<Profile/>
  }
])
function App() {

  return (
      <>
   <RouterProvider router={appRouter}/>
      </>
  )
}

export default App
