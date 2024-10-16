import React from 'react'
import Navbar from './ui/shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'

const Home = () => {
  return (
    <div>
        <Navbar></Navbar>
        <HeroSection/>
      <CategoryCarousel/>
    
        {/* <LatestJobs/>
        <Footer/>  */}
    </div>
  )
}

export default Home