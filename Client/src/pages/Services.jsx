import React from 'react'
import ServicesIntro from './services/ServicesIntro'
import CoreServices from './services/CoreServices.jsx'
import CaseStudySection from './services/CaseStudySection.jsx'
import AIBusinessHero from './services/AIBusinessHero.jsx'
import ServicesSection from '../components/ServicesSection.jsx'
import ProductsUI from './services/ProductsUI.jsx'
import ServicesPanel from './services/ProductsUI.jsx'


function Services() {
  return (
    <div className=''>
      {/* <ServicesIntro/>
      <CoreServices/>
      <AIBusinessHero/>
      <ServicesSection/>
      <CaseStudySection/> */}
     <ServicesPanel/>
    </div>
  )
}

export default Services
