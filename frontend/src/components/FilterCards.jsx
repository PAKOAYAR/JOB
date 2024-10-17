import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
const filterData=[
    {
        filterType:"location",
        array:["delhi","bengaluru","pune","ahmedabad"]
    },
    {
        filterType:"industry",
        array:["Frontend Developer","Backend Developer","Data Science","Graphic Designer"]
    },
    {
        filterType:"salary",
        array:["0-40K","1-2Lakh","2-3Lakh","3-4lakh"]
    }
]
const FilterCards = () => {
  return (
    <div className='w-full bg-white p-3 rounded-md'>
        <h1 className='font-bold text-lg'>Filter Jobs</h1>
        <hr className='mt-3 '/>
        <RadioGroup>
            {
                filterData.map((data,index)=>(
                    <div>
                        <h1 className='font-bold text-lg'>
                            {data.filterType}
                            {
                                data.array.map((item,index)=>{
                                    return(
                                        <div className='flex items-center space-x-2 my-2'>
                                            <RadioGroupItem value={item}/>
                                            <Label>{item}</Label>
                                        </div>
                                    )
                                })
                            }
                        </h1>
                    </div>
                ))
            }
        </RadioGroup>
    </div>
  )
}

export default FilterCards