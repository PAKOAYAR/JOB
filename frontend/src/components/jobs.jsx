
import Navbar from './ui/shared/Navbar'
import FilterCards from './FilterCards'
import Job from './Job'
import { useSelector } from 'react-redux'
//const Jobarray=[1,2,3,4,5,6,7,8]
const Jobs = () => {
    const{alljobs}=useSelector(store=>store.job)
  return (
    <div>
        <Navbar/>
        <div className='max-w-7xl mx-auto mt-5'>
            <div className='flex gap-5'>
                <div className='w-20%'>
                <FilterCards/>
                </div>
     
        
        {
            alljobs.length <=0 ?<span>Job Not Found</span>:(
                <div className='flex-1 h-[88vh] overflow-y-auto'>
                   <div className='grid grid-cols-3 gap-4'>
                    {
                            
                                <div ><Job/></div>
                    }
                   </div>
  
                </div>
            )
           
        }
            </div>
        
        </div>
       
    </div>
  )
}

export default Jobs