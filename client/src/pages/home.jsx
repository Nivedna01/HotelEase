import React from 'react'
import Hero from '../components/Hero'
import FeatureDestination from '../components/FeatureDestination'
import Offer from '../components/Offer'
import Testimonial from '../components/Testimonial'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const home = () => {
  return (
    <>
        <Hero/>
        <FeatureDestination />
        <Offer />
        <Testimonial />
        <NewsLetter />
        
    </>
  )
}

export default home