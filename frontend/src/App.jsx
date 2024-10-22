
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
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setLoading, SetUser } from './redux/authSlice'
import { toast } from 'sonner'


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
  const dispath = useDispatch();
const loadUser = async ()=>{
  try {
    dispath(setLoading(true));
    const res=await axios.get(`http://localhost:8000/api/v1/user/myprofile`,{ withCredentials: true });
    console.log(res);
    
    if(res.data.success){
      dispath(SetUser(res.data.user))
      toast.success("welcome back")
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // toast.error(error.response.data.error);
    } else {
      toast.error(error.message);
    }
  }finally{
    dispath(setLoading(false));
  }
}

  useEffect(() => {
    loadUser();
  }, [])
  
  return (
      <>
   <RouterProvider router={appRouter}/>
      </>
  )
}

export default App
