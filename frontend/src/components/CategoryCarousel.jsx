import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import { Button } from './ui/button'
const category=[
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "Full Stack Developer",

]
const CategoryCarousel=()=>{
  return (
    <div>
      <Carousel>
        <CarouselContent className='w-full max-w-xl mx-auto my-20'>
            {
            category.map((cat, index) => (
                <CarouselItem className='md:basis-1/2 lg-basis-1/3'>
<Button>{cat}</Button>
                </CarouselItem>
            ))
            }
           
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default CategoryCarousel
