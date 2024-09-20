import React from 'react'
import Hero from '../components/Hero'
import LatestCollections from '../components/LatestCollections'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewLetterBox from '../components/NewLetterBox'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollections/>
      <BestSeller/>
      <OurPolicy/>
      <NewLetterBox/>
    </div>
  )
}

export default Home
