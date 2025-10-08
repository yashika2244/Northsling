import React from 'react'
import IndustriesSection from './industries/IndustriesSection'
import IndustriesHero from './industries/IndustriesHero'
import IndustryCards from './industries/IndustryCards'
import IndustryStats from './industries/IndustryStats'
import IndustryCTA from './industries/IndustryCTA'

function Industries() {
  return (
    <div>
      <IndustriesHero/>
      <IndustriesSection/>
       <IndustryCards />
      <IndustryStats />
      <IndustryCTA />
    </div>
  )
}

export default Industries
