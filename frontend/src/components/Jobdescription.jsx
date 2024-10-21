import React from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

const Jobdescription = () => {
    const isApplied=false
  return (
    <div className='max-w-7xl mx-auto my-10'>
        <div className='flex items-center justify-between'> 
        <div>
        <h1 className='font-bold text-xl'>Title</h1>
        <div className="flex items-center gap-2 mt-4">
        <Badge className={"text-blue-700 font-bold "} variant={"ghost"}>
          12 Positions
        </Badge>
        <Badge className={"text-[#F83002] font-bold "} variant={"ghost"}>
          Part Time
        </Badge>
        <Badge className={"text-[#7209b7] font-bold "} variant={"ghost"}>
          4 LPA
        </Badge>
      </div>
        </div>
      
      <Button disabled={isApplied} className={`rounded-lg ${isApplied ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#7209b7] hover:bg-[#5f32ad]'}`}>{isApplied ? 'Already Applied ' : 'Apply Now'}</Button>

        </div>
        <div>
            
        </div>
    
    </div>
  )
}

export default Jobdescription