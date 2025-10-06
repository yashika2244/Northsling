import React from 'react'
import CustomerExperience from './CustomerExperience'
import TailoredServices from './TailoredServices'
import CaseStudies from './CaseStudies'
import ContactForm from '../success/ContactForm'
import Footer from '../../Footer/Footer'
import UI from './Ui'

function MainServicesPage() {
  return (
    <div className='-mt-18 '>
        <UI/>
        <CustomerExperience/>
        <TailoredServices/>
        <CaseStudies/>
      <ContactForm/>
      <Footer/>
      
    </div>
  )
}

export default MainServicesPage
