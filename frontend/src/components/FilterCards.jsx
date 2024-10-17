import React from 'react'
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
    <div>
        <h1>Filter Jobs</h1>
        <hr className='mt-3 '/>
    </div>
  )
}

export default FilterCards