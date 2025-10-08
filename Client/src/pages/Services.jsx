import React from 'react'
import ServicesIntro from './services/ServicesIntro'
import CoreServices from './services/CoreServices.jsx'
import CaseStudySection from './services/CaseStudySection.jsx'
import AIBusinessHero from './services/AIBusinessHero.jsx'
import ServicesSection from '../components/ServicesSection.jsx'


function Services() {
  return (
    <div className=''>
      <ServicesIntro/>
      <CoreServices/>
      <AIBusinessHero/>
      <ServicesSection/>
      <CaseStudySection/>
     
    </div>
  )
}

export default Services
