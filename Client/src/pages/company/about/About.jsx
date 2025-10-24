import React from 'react'
import DigitalSuccessSection from './DigitalSuccessSection'
import AtAGlance from './AtAGlance'
import LeadershipTeam from '../LeadershipTeam'
import AboutSection from './AboutSection'
import JourneySection from './JourneySection'
import RoadAheadSection from './RoadAheadSection'
import ContactForm from '../../success/ContactForm'

function About() {
  return (
    <div>
        <DigitalSuccessSection/>
        <AtAGlance/>
    <LeadershipTeam/>
    <AboutSection/>
    <JourneySection/>
    <RoadAheadSection/>
      <ContactForm/>
    </div>
  )
}

export default About
