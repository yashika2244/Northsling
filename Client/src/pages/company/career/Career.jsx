import React from 'react'
import CareerSection from './CareerSection'
import WhySection from './WhySection'
import InfoPanels from './InfoPanels'
import NorthslingUIDesigns from '../../../components/Ui.jsx/NorthslingUIDesigns'
import {
  Edit3,
  Globe,
  Target,
  Zap,
  Plug,
  Shield,
  Layers,
  FileCheck,
  Code2,
  Cloud,
  ShieldCheck,
  Brain,
  LayoutGrid,
  Rocket,
} from "lucide-react";
import JobOpenings from './JobOpenings'
import ContactForm from '../../success/ContactForm'
function Career() {
   const uiFeatures = [
  {
    icon: <Code2 className="w-6 h-6 text-orange-500" />, // Code for architecture
    title: "We Create Value",
    desc: "Understanding clients’ needs, long-term commitment and speedy delivery make us one of the most award winning tech firms in the industry.",
  },
  {
    icon: <Zap className="w-6 h-6 text-orange-500" />, // Zap for AI-powered actions
    title: "We Innovate Everyday",
    desc: "Our global team of experts is continuously creating new technology solutions to enable our clients to stay ahead of the competition.",
  },
  {
    icon: <Layers className="w-6 h-6 text-orange-500" />, // Layers for modularity
    title: "We Love Technology",
    desc: "Technology has the power to change lives, making our love for it eternal and at INT., we always use technology in a creative and ethical manner.",
  },
  {
    icon: <Plug className="w-6 h-6 text-orange-500" />, // Plug for integrations
    title: "We Embrace Integrity, Respect, and Commitment",
    desc: "We mean what we say, we respect our colleagues, clients, and business partners and strive to meet commitments. We are upfront, honest, ethical, and sincere.",
  },

];
  return (
    <div>
      <CareerSection/>
      <WhySection/>
      <InfoPanels/>
            <NorthslingUIDesigns
                    sectionTitle={
                      <>
                      Why we are the best place to work
                      </>
                    }
                    
                    features={uiFeatures}
                  />
                  <JobOpenings/>
                  <ContactForm/>
    </div>
  )
}

export default Career
