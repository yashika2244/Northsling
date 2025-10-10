import React from 'react'
import IndustriesSection from './industries/IndustriesSection'
import IndustriesHero from './industries/IndustriesHero'
import IndustryCards from './industries/IndustryCards'
import IndustryStats from './industries/IndustryStats'
import IndustryCTA from './industries/IndustryCTA'
import IndustriesPanel from './industries/IndustrienPanel'

function Industries() {
  return (
     <div className="pt-21 bg-white min-h-screen">

      {/* <IndustriesHero/>
      <IndustriesSection/>
       <IndustryCards />
      <IndustryStats />
      <IndustryCTA /> */}
      <IndustriesPanel/>
    </div>
  )
}

export default Industries
