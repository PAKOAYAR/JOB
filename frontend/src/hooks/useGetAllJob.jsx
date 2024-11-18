import { setalljobs } from '@/redux/jobslice'
import { JOB_API_END_POINT } from '@/utils/constant'
import axios from 'axios'
import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetAllJob = () => {
    const dispatch=useDispatch();
  useEffect(()=>{
    const fetchAllJob = async () => {
        try {
            const res = await axios.get(`${JOB_API_END_POINT}/get`,{withCredentials:true})
            if(res.data.success){
                dispatch(setalljobs(res.data.jobs))
            }
        }
        catch (error) {
            console.error(error)
        }

    }
    fetchAllJob();

  },[])
}

export default useGetAllJob